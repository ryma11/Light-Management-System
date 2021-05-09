<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
date_default_timezone_set('Africa/Tunis');
$date = date('Y-m-d');
$heure =date('H:i:s'); 
//$heure =date('00:02:00'); 
 function Action($lignes)
{
   try{
  include "config.php";
  if($lignes=="off")
  {
  echo("All Off \n");
  //on met tous les actions a 0 initialement
  $c->query("UPDATE gpio SET action='0' WHERE pin<>'4'");
  //all off sauf ligne 4 qui est une ligne de reset du module
  $c->query("UPDATE gpio SET action='1' WHERE status='1' and pin<>'4'");
  $c->commit();
  }
  elseif($lignes=="on")
  {
  echo("All On \n");
  //on met tous les actions a 0 initialement
  $c->query("UPDATE gpio SET action='0' WHERE pin<>'4'");
  //all on sauf ligne 4 qui est une ligne de reset du module
  $c->query("UPDATE gpio SET action='1' WHERE status='0' and pin<>'4'"); 
  $c->commit();
  }
  else
  {
  $lignes = explode(",", $lignes);
  //$n=count($lignes);
    //on a 3lignes à commander 1,2,3
   //on met tous les actions a 0 initialement
  $c->query("UPDATE gpio SET action='0' WHERE pin<>'4'");
  $nb_lignes=3;
  for($i=1;$i<$nb_lignes+1;$i++)
    {echo $i;
      if (in_array($i, $lignes))
      {
        echo "Found\n";
      $c->query("UPDATE gpio SET action='1' WHERE status='0' and pin='$i'"); 
      }
      else
      {
          echo "Not Found\n";
      $c->query("UPDATE gpio SET action='1' WHERE status='1' and pin='$i'");      
      }
     $c->commit();
      //echo("\n");
    }
  }
  $c->close();
}
catch (Exception $e) 
{
	echo("erreur");
}
   
}
try{
include "config.php";
 
  $res = $c->query("select * from mode");
  $rs=mysqli_fetch_array($res,MYSQLI_ASSOC);
  $mode=$rs["mode"];
  $time_coucher=$rs["time_coucher"];
  $time_lever=$rs["time_lever"];
  echo("heure :".$heure); 
  echo("\ntime_lever :".$time_lever); 
  echo("\ntime_coucher :".$time_coucher); 
  if($mode==1)
  {
   echo("\nmode automatique\n"); 
    if($heure >= $time_lever & $heure < $time_coucher)
    {
      echo("All Off"); 
      Action("off");
      //$c->query("UPDATE gpio SET action='0' WHERE status='0' and pin<>'4' "); 
      //$c->commit();
    }
    else 
    {
      echo("nous sommes dans l'intervalle ");
      $res = $c->query("select * from scenario ORDER BY time_transition ASC");
      $n=mysqli_num_rows($res);
      $time=$time_coucher;
      for($i=0;$i<$n;$i++){
        $rs=mysqli_fetch_array($res,MYSQLI_ASSOC);	
        $time_transition=$rs["time_transition"];
		echo("\n".$time_transition);
        if($heure>=$time_transition)
        {
        $time=$time_transition;
        $lignes=$rs["lignes"];
        }
        	
       } 
      if( $time<=$time_coucher & $heure>=$time_coucher )
      {//cad on est juste apres le coucher du soleil
        echo("\nAll On\n");
        Action("on");
       
      }
      elseif($time==$time_coucher & $heure<$time_coucher)
      {//cad on juste apres 00:00:00 donc le scenario prend le dernier etat juste avant minuit cad la derniere etat du tableau
        $lignes=$rs["lignes"];
        echo("\nles lignes qui seront allumé ".$lignes."\n");  
        Action($lignes);
       
      }
      
      else
      {//cad on est arrivée a à une transition 
         echo("\nles lignes qui seront allumé ".$lignes."\n");
        Action($lignes);
      }
      
    }
    
  }
  else
  {
    echo("mode manuelle");
  }
  
  $c->close();
}
catch (Exception $e) 
{
	echo("erreur");
}


?>
