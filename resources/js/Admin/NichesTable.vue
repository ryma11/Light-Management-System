<template>
    <div class="card shadow" :class="type === 'dark' ? 'bg-default' : ''">
        <div
            class="card-header border-0"
            :class="type === 'dark' ? 'bg-transparent' : ''"
        >
            <div class="row align-items-center">
                <div class="col">
                    <h3
                        class="mb-0"
                        :class="type === 'dark' ? 'text-white' : ''"
                    >
                        {{ title }}
                    </h3>
                </div>
                <div class="col text-right">
                    <button
                        type="button"
                        class="btn btn-primary"
                        data-toggle="modal"
                        data-target="#exampleModalLong"
                        @click="create"
                    >
                        Ajouter Niche
                    </button>
                </div>
            </div>
        </div>

        <div class="table-responsive">
            <base-table
                class="table align-items-center table-flush"
                :class="type === 'dark' ? 'table-dark' : ''"
                :thead-classes="type === 'dark' ? 'thead-dark' : 'thead-light'"
                tbody-classes="list"
                :data="tableData.data"
            >
                <template slot="columns">
                    <th>Nom</th>
                    <th>Numéro GSM</th>
                    <th>Adresse</th>
                    <th>Localisation</th>
                    <th>Nombre de Lignes</th>
                    <th>Puissance Moyenne</th>
                    <th>Actions</th>
                    <!-- <th></th> -->
                </template>

                <!-- (For example, scope=“myScope”,
        properties passed into the <slot> will be accessible as {{myScope.myProperty}}
        while scope=“yourScope” will be accessed as {{yourScope.myProperty}}.)-->

                <template slot-scope="{ row }">
                    <th scope="row">{{ row.nom }}</th>
                    <td>{{ row.gsm }}</td>
                    <td>{{ row.adresse }}</td>
                    <td>{{ row.map }}</td>
                    <td>{{ row.nombre_lignes }}</td>
                    <td>{{ row.puissance_moyenne }}</td>
                    <!-- row.nombre_lignes -->

                    <td>
                        <button
                            class="btn btn-success"
                            @click="ShowLignes(row.id)"
                        >
                            Lignes
                        </button>

                        <button
                            class="btn btn-info"
                            data-toggle="modal"
                            data-target="#exampleModalLong"
                            @click="edit(row)"
                        >
                            Modifier
                        </button>

                        <button class="btn btn-danger" @click="destroy(row.id)">
                            Supprimer
                        </button>
                    </td>
                </template>
            </base-table>
        </div>

        <div
            class="card-footer d-flex justify-content-end"
            :class="type === 'dark' ? 'bg-transparent' : ''"
        >
            <!-- <base-pagination></base-pagination> -->
            <pagination
                :data="tableData"
                @pagination-change-page="getNiches"
            ></pagination>
        </div>

        <!---------------------------------- Modal ---------------------------------------------------->

        <div
            class="modal fade"
            id="exampleModalLong"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLongTitle"
            aria-hidden="true"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">
                            Informations niche
                        </h5>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form>
                        <div class="modal-body">
                            <div class="pl-lg-4">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <base-input
                                            alternative
                                            placeholder="Nom"
                                            type="text"
                                            label="Nom"
                                            input-classes="form-control-alternative"
                                            v-model.trim="$v.nom.$model"
                                            v-model="nom"
                                            required
                                        />
                                        <div
                                            class="text-danger pb-4 pt-0"
                                            v-if="subl && !$v.nom.required"
                                        >
                                            <small>"Nom" obligatoire !</small>
                                        </div>
                                        <div
                                            class="text-danger pb-4"
                                            v-if="subl && !$v.nom.minLength"
                                        >
                                            <small>
                                                "Nom" doit comporter au minimum
                                                {{
                                                    $v.nom.$params.minLength.min
                                                }}
                                                lettres.
                                            </small>
                                        </div>
                                    </div>

                                    <!--  Num GSM  -->

                                    <div class="col-lg-6">
                                        <base-input
                                            alternative
                                            type="number"
                                            label="Numero GSM"
                                            placeholder="Numero GSM"
                                            input-classes="form-control-alternative"
                                            v-model.trim="$v.gsm.$model"
                                            v-model="gsm"
                                            required
                                        />

                                        <div
                                            class="text-danger pb-4"
                                            v-if="subl && !$v.gsm.required"
                                        >
                                            <small>
                                                "Numero GSM" obligatoire !
                                            </small>
                                        </div>
                                        <div
                                            class="text-danger pb-4"
                                            v-if="subl && !$v.gsm.between"
                                        >
                                            <small>
                                                "Numre GSM" doit comporter
                                                excatement 8 chiffres.
                                            </small>
                                        </div>
                                    </div>

                                    <!--  Localisation -->
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <base-input
                                            alternative
                                            label="Localisation"
                                            placeholder="Localisation"
                                            input-classes="form-control-alternative"
                                            v-model.trim="$v.map.$model"
                                            v-model="map"
                                            required
                                        />

                                        <div
                                            class="text-danger pb-4"
                                            v-if="subl && !$v.map.required"
                                        >
                                            <small>
                                                "Localisation" obligatoire !
                                            </small>
                                        </div>
                                        <div
                                            class="text-danger"
                                            v-if="subl && !$v.map.minLength"
                                        >
                                            <small>
                                                "Localisation" doit comporter au
                                                minimum 20 lettres!
                                            </small>
                                        </div>
                                    </div>

                                    <!--  Adresse ------------------------------------->

                                    <div class="col-lg-6">
                                        <base-input
                                            alternative
                                            label="Adresse"
                                            placeholder="Adresse"
                                            input-classes="form-control-alternative"
                                            v-model.trim="$v.adr.$model"
                                            v-model="adr"
                                            required
                                        />
                                        <div
                                            class="text-danger"
                                            v-if="subl && !$v.adr.required"
                                        >
                                            <small
                                                >"Adresse" obligatoire !</small
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- boutton submit ------------------------------------------------------------>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Fermer
                            </button>
                            <button
                                type="button"
                                class="btn btn-success"
                                @click.prevent="
                                    editMode ? updateNiche() : submit()
                                "
                            >
                                Enregistrer
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Datepicker from "vuejs-datepicker";
import axios from "axios";
import { required, minLength, between } from "vuelidate/lib/validators";
import LignesTable from "./LignesTable";

export default {
    components: {
        Datepicker,
        LignesTable
    },
    name: "niches-table",
    props: {
        type: {
            type: String
        },
        title: String
    },
    data() {
        return {
            nom: "Niche",
            gsm: null,
            map: null,
            adr: null,

            subl: false,
            sub: false,
            errors: false,
            al: false,

            tableData: {},
            editMode: false
        };
    },
    validations: {
        nom: { required, minLength: minLength(3) },
        gsm: {
            required,
            between: between(11111111, 99999999)
        },
        map: { required, minLength: minLength(1) },
        adr: { required }
    },
    methods: {
        ShowLignes(id) {
            //this.$router.push("lignes/" + id);
            this.$router.push({ name: "lignes", query: { id_niche: id } });
        },
        updateNiche() {
            console.log("edt " + this.id);
            axios
                .put("api/niches/" + this.id, {
                    nom: this.nom,
                    gsm: this.gsm,
                    map: this.map,
                    adresse: this.adr
                })
                .then(response => {
                    console.log(response);
                    this.resetForm();
                    this.getNiches();
                })
                .catch(err => console.log(err));
        },
        edit(niche) {
            this.resetForm();
            this.editMode = true;
            this.id = niche.id;
            this.nom = niche.nom;
            this.gsm = niche.gsm;
            this.map = niche.map;
            this.adr = niche.adresse;
        },
        submit() {
            this.subl = true;
            this.$v.nom.$touch();
            // console.log(this.nom, this.gsm, this.map, this.adr, this.nbl);
            if (this.$v.$invalid) {
                this.errors = true;
            } else {
                axios
                    .post("api/niches", {
                        // user_id: this.$store.state.user_id,
                        nom: this.nom,
                        gsm: this.gsm,
                        map: this.map,
                        adresse: this.adr
                    })
                    .then(response => {
                        // console.log("id laste niche fil post niche:" + this.niches[0].id);
                        console.log(response);
                        this.getNiches();
                        this.resetForm();
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        },
        getNiches(page = 1) {
            axios.get("api/niches?page=" + page).then(response => {
                console.log(response.data);
                console.log(this.$store.state.token);
                this.tableData = response.data;
            });
        },
        destroy(id) {
            this.$swal
                .fire({
                    title: "Êtes-vous sûr?",
                    text: "Vous ne pourrez pas revenir en arrière!",
                    icon: "warning",
                    showCancelButton: true,
                    cancelButtonText: "Annuler",
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Oui, Supprimer"
                })
                .then(result => {
                    if (result.value) {
                        axios
                            .delete("api/niches/" + id)
                            .then(response => {
                                this.$swal.fire(
                                    "Effectué!",
                                    "La niche a été supprimé.",
                                    "success"
                                );
                                this.getNiches();
                                this.resetForm();
                            })
                            .catch(err => console.log(err));
                    }
                });
        },
        resetForm() {
            this.subl = false;
            this.nom = "Niche";
            this.gsm = null;
            this.adr = null;
            this.map = null;
            this.id_niche = null;
        },
        create() {
            this.editMode = false;
            this.resetForm();
        }
    },
    created() {
        axios.defaults.headers.common["Auth"] =
            "bearer " + this.$store.state.token;
    },
    mounted() {
        this.getNiches();
    }
};
</script>
<style></style>
