(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/AgentComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Admin/AgentComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AgentsTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgentsTable */ "./resources/js/Admin/AgentsTable.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "tables",
  components: {
    AgentsTable: _AgentsTable__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/AgentsTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Admin/AgentsTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  name: "agents-table",
  props: {
    type: {
      type: String
    },
    title: String
  },
  data: function data() {
    return {
      id: "",
      editMode: false,
      tableData: {},
      datnaiss: null,
      nom: null,
      adr: null,
      sub: false,
      errors: false,
      prenom: null,
      passvald: null,
      email: null,
      nomuser: null,
      numtl: null,
      reg: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    };
  },
  validations: {
    nom: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["minLength"])(3)
    },
    prenom: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["minLength"])(3)
    },
    email: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    },
    datnaiss: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    },
    nomuser: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    },
    numtl: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      between: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["between"])(11111111, 99999999)
    },
    adr: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    }
  },
  mounted: function mounted() {
    this.getAgents();
  },
  methods: {
    create: function create() {
      this.editMode = false;
      this.resetForm();
    },
    resetForm: function resetForm() {
      this.datnaiss = null;
      this.nom = null;
      this.adr = null;
      this.sub = false;
      this.errors = false;
      this.prenom = null;
      this.email = null;
      this.nomuser = null;
      this.numtl = null;
    },
    submit: function submit() {
      var _this = this;

      this.sub = true; //   console.log(this.$v);

      if (this.$v.$invalid) {
        this.errors = true;
      } else {
        axios.post("api/agents", {
          first_name: this.prenom,
          last_name: this.nom,
          email: this.email,
          username: this.nomuser,
          birthday: this.datnaiss,
          phone: this.numtl,
          address: this.adr
        }).then(function (response) {
          console.log(response);

          _this.resetForm();

          _this.getAgents();
        })["catch"](function (error) {
          console.log(error);
        });
      }
    },
    getAgents: function getAgents() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get("api/agents?page=" + page).then(function (response) {
        // console.log(response.data);
        _this2.tableData = response.data;
      });
    },
    edit: function edit(agent) {
      this.editMode = true;
      this.resetForm();
      this.id = agent.id;
      this.prenom = agent.first_name;
      this.nom = agent.last_name;
      this.email = agent.email;
      this.nomuser = agent.username;
      this.datnaiss = agent.birthday;
      this.numtl = agent.phone;
      this.adr = agent.address;
    },
    update: function update() {
      var _this3 = this;

      this.sub = true; //   console.log(this.$v);

      if (this.$v.$invalid) {
        this.errors = true;
      } else {
        axios.put("api/agents/" + this.id, {
          first_name: this.prenom,
          last_name: this.nom,
          email: this.email,
          username: this.nomuser,
          birthday: this.datnaiss,
          phone: this.numtl,
          address: this.adr
        }).then(function (response) {
          _this3.resetForm();

          _this3.getAgents();

          console.log(response);
        })["catch"](function (error) {
          console.log(error);
        });
      }
    },
    destroy: function destroy(id) {
      var _this4 = this;

      this.$swal.fire({
        title: "Êtes-vous sûr?",
        text: "Vous ne pourrez pas revenir en arrière!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "Annuler",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Oui, Supprimer"
      }).then(function (result) {
        if (result.value) {
          axios["delete"]("api/agents/" + id).then(function (response) {
            _this4.$swal.fire("Effectué!", "L'agent a été supprimé.", "success");

            _this4.getAgents();
          })["catch"](function (err) {
            return console.log(err);
          });
        }
      });
    },
    blockAgent: function blockAgent(agent) {
      var _this5 = this;

      axios.put("api/agent/" + agent.id, {
        is_blocked: !agent.is_blocked
      }).then(function (response) {
        _this5.getAgents();
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    isEmailValid: function isEmailValid() {
      return this.email == "" ? "" : this.reg.test(this.email) ? true : false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/Dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Admin/Dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_components_Charts_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/components/Charts/config */ "./resources/js/components/Charts/config.js");
/* harmony import */ var _js_components_Charts_LineChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/components/Charts/LineChart */ "./resources/js/components/Charts/LineChart.js");
/* harmony import */ var _js_components_Charts_BarChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/js/components/Charts/BarChart */ "./resources/js/components/Charts/BarChart.js");
/* harmony import */ var _Dashboard_SocialTrafficTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dashboard/SocialTrafficTable */ "./resources/js/Admin/Dashboard/SocialTrafficTable.vue");
/* harmony import */ var _Dashboard_PageVisitsTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dashboard/PageVisitsTable */ "./resources/js/Admin/Dashboard/PageVisitsTable.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Charts


 // Tables



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    LineChart: _js_components_Charts_LineChart__WEBPACK_IMPORTED_MODULE_1__["default"],
    BarChart: _js_components_Charts_BarChart__WEBPACK_IMPORTED_MODULE_2__["default"],
    PageVisitsTable: _Dashboard_PageVisitsTable__WEBPACK_IMPORTED_MODULE_4__["default"],
    SocialTrafficTable: _Dashboard_SocialTrafficTable__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      bigLineChart: {
        allData: [[0, 20, 10, 30, 15, 40, 20, 60, 60], [0, 20, 5, 25, 10, 30, 15, 40, 40]],
        activeIndex: 0,
        chartData: {
          datasets: [],
          labels: []
        },
        extraOptions: _js_components_Charts_config__WEBPACK_IMPORTED_MODULE_0__["blueChartOptions"]
      },
      redBarChart: {
        chartData: {
          labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Sales',
            data: [25, 20, 30, 22, 17, 29]
          }]
        }
      }
    };
  },
  methods: {
    initBigChart: function initBigChart(index) {
      var chartData = {
        datasets: [{
          label: 'Performance',
          data: this.bigLineChart.allData[index]
        }],
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      };
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    }
  },
  mounted: function mounted() {
    this.initBigChart(0);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Admin/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "page-visits-table",
  data: function data() {
    return {
      tableData: [{
        page: "/argon/",
        visitors: "4,569",
        unique: "340",
        bounceRate: "46,53%",
        bounceRateDirection: "up"
      }, {
        page: "/argon/index.html",
        visitors: "3,985",
        unique: "319",
        bounceRate: "46,53%",
        bounceRateDirection: "down"
      }, {
        page: "/argon/charts.html",
        visitors: "3,513",
        unique: "294",
        bounceRate: "36,49%",
        bounceRateDirection: "down"
      }, {
        page: "/argon/tables.html",
        visitors: "2,050",
        unique: "147",
        bounceRate: "50,87%",
        bounceRateDirection: "up"
      }, {
        page: "/argon/profile.html",
        visitors: "1,795",
        unique: "190",
        bounceRate: "46,53%",
        bounceRateDirection: "down"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Admin/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'social-traffic-table',
  data: function data() {
    return {
      tableData: [{
        name: 'Facebook',
        visitors: '1,480',
        progress: 60,
        progressType: 'gradient-danger'
      }, {
        name: 'LinkedIn',
        visitors: '5,480',
        progress: 70,
        progressType: 'gradient-success'
      }, {
        name: 'Google',
        visitors: '4,807',
        progress: 80,
        progressType: 'gradient-primary'
      }, {
        name: 'Instagram',
        visitors: '3,678',
        progress: 75,
        progressType: 'gradient-info'
      }, {
        name: 'Twitter',
        visitors: '2,645',
        progress: 30,
        progressType: 'gradient-warning'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/InterventionComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Admin/InterventionComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InterventionsTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InterventionsTable */ "./resources/js/Admin/InterventionsTable.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    InterventionsTable: _InterventionsTable__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/InterventionsTable.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Admin/InterventionsTable.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  name: "interventions-table",
  props: {
    type: {
      type: String
    },
    title: String
  },
  data: function data() {
    return {
      nom: "Niche",
      gsm: null,
      map: null,
      adr: null,
      subl: false,
      sub: false,
      errors: false,
      al: false,
      ligneData: [],
      tableData: {},
      editMode: false,
      idLigne: null
    };
  },
  mounted: function mounted() {
    this.getNiches();
  },
  methods: {
    ShowLignes: function ShowLignes(id) {
      var _this = this;

      //this.$router.push("lignes/" + id);
      // this.$router.push({ name: "lignes", query: { id_niche: id } });
      this.idLigne = id;
      axios.get("api/lignes/" + id).then(function (response) {
        console.log("res lignes");
        console.log(response);
        _this.ligneData = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getNiches: function getNiches() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get("api/niches?page=" + page).then(function (response) {
        //  console.log(response.data);
        _this2.tableData = response.data;
      });
    },
    toggleStatus: function toggleStatus(ligne) {
      var _this3 = this;

      axios.put("api/ligne/" + ligne.id, {
        etat: !ligne.etat
      }).then(function (response) {
        _this3.addIntervention(ligne); //  this.ShowLignes(this.idLigne);


        console.log(response);
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    addIntervention: function addIntervention(ligne) {
      var _this4 = this;

      console.log("ligne:");
      console.log(ligne);
      axios.post("api/interventions", {
        type: !ligne.etat,
        ligne_id: ligne.id,
        niche_id: ligne.niche_id
      }).then(function (response) {
        console.log("respense intervention");
        console.log(response);

        _this4.ShowLignes(_this4.idLigne);
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/LignesTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Admin/LignesTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  name: "lignes-table",
  props: {
    type: {
      type: String
    },
    title: String
  },
  computed: {},
  data: function data() {
    return {
      id: null,
      editMode: false,
      editPassword: false,
      tableData: [],
      nbl: null,
      pu: null,
      i: 0,
      id_niche: null,
      sub: false,
      errors: false,
      niche: [],
      nombre_ligne: 0
    };
  },
  validations: {
    pu: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      between: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["between"])(0, 100000)
    },
    nbl: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      between: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["between"])(0, 100000)
    }
  },
  methods: {
    getNiche: function getNiche(test) {
      var _this = this;

      axios.get("api/niches/" + this.id_niche).then(function (response) {
        _this.niche = response.data;

        _this.updateNich(test);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    submit: function submit() {
      var _this2 = this;

      this.sub = true;

      if (this.$v.$invalid) {
        this.errors = true;
      } else {
        axios.post("api/lignes", {
          id_niche: this.id_niche,
          nombre_point_limineux: this.nbl,
          puissance_moyenne: this.pu
        }).then(function (response) {
          console.log("responseEEEE");
          console.log(response);
          console.log("getniche() submit");

          _this2.getNiche(1);
        })["catch"](function (error) {
          console.log(error);
        });
      }
    },
    updateNich: function updateNich(test) {
      console.log("niche into updateNiche(): ", this.niche);
      this.nombre_ligne = this.niche.nombre_lignes;

      if (test == 1) {
        this.nombre_ligne = this.niche.nombre_lignes + 1;
      } else if (test == 0) {
        this.nombre_ligne = this.niche.nombre_lignes - 1;
      }

      axios.put("api/niches/" + this.id_niche, {
        nombre_lignes: this.nombre_ligne,
        nom: this.niche.nom,
        gsm: this.niche.gsm,
        map: this.niche.map,
        adresse: this.niche.adresse // puissance_moyenne: this.niche.puissance_moyenne,

      }).then(function (response) {
        console.log("niche updated:");
        console.log(response);
      })["catch"](function (error) {
        console.log(error);
      });

      if (test == 0) {
        axios.put("api/niches/" + this.id_niche, {
          nombre_lignes: this.nombre_ligne,
          nom: this.niche.nom,
          gsm: this.niche.gsm,
          map: this.niche.map,
          adresse: this.niche.adresse // puissance_moyenne: this.niche.puissance_moyenne,

        }).then(function (response) {
          console.log("niche updated 2:");
          console.log(response);
        })["catch"](function (error) {
          console.log(error);
        });
      }

      this.resetForm();
      this.getLignes();
    },
    getNicheId: function getNicheId() {
      this.id_niche = this.$route.query.id_niche;
    },
    getLignes: function getLignes() {
      var _this3 = this;

      axios.get("api/lignes/" + this.id_niche).then(function (response) {
        console.log("res lignes");
        console.log(response);
        _this3.tableData = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    edit: function edit(ligne) {
      this.editMode = true;
      this.resetForm();
      this.id = ligne.id;
      this.nbl = ligne.nombre_point_limineux;
      this.pu = ligne.puissance_moyenne;
    },
    destroy: function destroy(id) {
      var _this4 = this;

      this.$swal.fire({
        title: "Êtes-vous sûr?",
        text: "Vous ne pourrez pas revenir en arrière!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "Annuler",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Oui, Supprimer"
      }).then(function (result) {
        if (result.value) {
          axios["delete"]("api/lignes/" + id).then(function (response) {
            _this4.$swal.fire("Effectué!", "La ligne a été supprimé.", "success");

            _this4.getLignes();

            console.log("getniche() destroy");

            _this4.getNiche(0);
          })["catch"](function (err) {
            return console.log(err);
          });
        }
      });
    },
    update: function update() {
      var _this5 = this;

      this.sub = true; //   console.log(this.$v);

      if (this.$v.$invalid) {
        this.errors = true;
      } else {
        axios.put("api/lignes/" + this.id, {
          nombre_point_limineux: this.nbl,
          puissance_moyenne: this.pu
        }).then(function (response) {
          console.log("getniche() update");

          _this5.getNiche(-1);

          console.log(response);
        })["catch"](function (error) {
          console.log(error);
        });
        this.resetForm();
        this.getLignes();
      }
    },
    resetForm: function resetForm() {
      this.pu = null;
      this.nbl = null;
      this.sub = false;
      this.errors = false;
    },
    create: function create() {
      this.editMode = false;
      this.resetForm();
    }
  },
  mounted: function mounted() {
    this.getNicheId();
    this.getLignes();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/NicheComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Admin/NicheComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NichesTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NichesTable */ "./resources/js/Admin/NichesTable.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "tables",
  components: {
    NichesTable: _NichesTable__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/NichesTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Admin/NichesTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LignesTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LignesTable */ "./resources/js/Admin/LignesTable.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"],
    LignesTable: _LignesTable__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  name: "niches-table",
  props: {
    type: {
      type: String
    },
    title: String
  },
  data: function data() {
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
    nom: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
      minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["minLength"])(3)
    },
    gsm: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
      between: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["between"])(11111111, 99999999)
    },
    map: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
      minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["minLength"])(1)
    },
    adr: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
    }
  },
  methods: {
    ShowLignes: function ShowLignes(id) {
      //this.$router.push("lignes/" + id);
      this.$router.push({
        name: "lignes",
        query: {
          id_niche: id
        }
      });
    },
    updateNiche: function updateNiche() {
      var _this = this;

      console.log("edt " + this.id);
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("api/niches/" + this.id, {
        nom: this.nom,
        gsm: this.gsm,
        map: this.map,
        adresse: this.adr
      }).then(function (response) {
        console.log(response);

        _this.resetForm();

        _this.getNiches();
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    edit: function edit(niche) {
      this.resetForm();
      this.editMode = true;
      this.id = niche.id;
      this.nom = niche.nom;
      this.gsm = niche.gsm;
      this.map = niche.map;
      this.adr = niche.adresse;
    },
    submit: function submit() {
      var _this2 = this;

      this.subl = true;
      this.$v.nom.$touch(); // console.log(this.nom, this.gsm, this.map, this.adr, this.nbl);

      if (this.$v.$invalid) {
        this.errors = true;
      } else {
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("api/niches", {
          // user_id: this.$store.state.user_id,
          nom: this.nom,
          gsm: this.gsm,
          map: this.map,
          adresse: this.adr
        }).then(function (response) {
          // console.log("id laste niche fil post niche:" + this.niches[0].id);
          console.log(response);

          _this2.getNiches();

          _this2.resetForm();
        })["catch"](function (error) {
          console.log(error);
        });
      }
    },
    getNiches: function getNiches() {
      var _this3 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("api/niches?page=" + page).then(function (response) {
        console.log(response.data);
        console.log(_this3.$store.state.token);
        _this3.tableData = response.data;
      });
    },
    destroy: function destroy(id) {
      var _this4 = this;

      this.$swal.fire({
        title: "Êtes-vous sûr?",
        text: "Vous ne pourrez pas revenir en arrière!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "Annuler",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Oui, Supprimer"
      }).then(function (result) {
        if (result.value) {
          axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("api/niches/" + id).then(function (response) {
            _this4.$swal.fire("Effectué!", "La niche a été supprimé.", "success");

            _this4.getNiches();

            _this4.resetForm();
          })["catch"](function (err) {
            return console.log(err);
          });
        }
      });
    },
    resetForm: function resetForm() {
      this.subl = false;
      this.nom = "Niche";
      this.gsm = null;
      this.adr = null;
      this.map = null;
      this.id_niche = null;
    },
    create: function create() {
      this.editMode = false;
      this.resetForm();
    }
  },
  created: function created() {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common["Auth"] = "bearer " + this.$store.state.token;
  },
  mounted: function mounted() {
    this.getNiches();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Super_Admin/AdminsComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Super_Admin/AdminsComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminsTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminsTable */ "./resources/js/Super_Admin/AdminsTable.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "admins",
  components: {
    AdminsTable: _AdminsTable__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Icons.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Icons.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_clipboard2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-clipboard2 */ "./node_modules/vue-clipboard2/vue-clipboard.js");
/* harmony import */ var vue_clipboard2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_clipboard2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_vue_es_directives_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue/es/directives/tooltip */ "./node_modules/bootstrap-vue/es/directives/tooltip/index.js");
/* harmony import */ var bootstrap_vue_es_directives_tooltip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_vue_es_directives_tooltip__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_clipboard2__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  directives: {
    'b-tooltip': bootstrap_vue_es_directives_tooltip__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      icons: [{
        name: "ni ni-active-40"
      }, {
        name: "ni ni-air-baloon"
      }, {
        name: "ni ni-album-2"
      }, {
        name: "ni ni-align-center"
      }, {
        name: "ni ni-align-left-2"
      }, {
        name: "ni ni-ambulance"
      }, {
        name: "ni ni-app"
      }, {
        name: "ni ni-archive-2"
      }, {
        name: "ni ni-atom"
      }, {
        name: "ni ni-badge"
      }, {
        name: "ni ni-bag-17"
      }, {
        name: "ni ni-basket"
      }, {
        name: "ni ni-bell-55"
      }, {
        name: "ni ni-bold-down"
      }, {
        name: "ni ni-bold-left"
      }, {
        name: "ni ni-bold-right"
      }, {
        name: "ni ni-bold-up"
      }, {
        name: "ni ni-bold"
      }, {
        name: "ni ni-book-bookmark"
      }, {
        name: "ni ni-books"
      }, {
        name: "ni ni-box-2"
      }, {
        name: "ni ni-briefcase-24"
      }, {
        name: "ni ni-building"
      }, {
        name: "ni ni-bulb-61"
      }, {
        name: "ni ni-bullet-list-67"
      }, {
        name: "ni ni-bus-front-12"
      }, {
        name: "ni ni-button-pause"
      }, {
        name: "ni ni-button-play"
      }, {
        name: "ni ni-button-power"
      }, {
        name: "ni ni-calendar-grid-58"
      }, {
        name: "ni ni-camera-compact"
      }, {
        name: "ni ni-caps-small"
      }, {
        name: "ni ni-cart"
      }, {
        name: "ni ni-chart-bar-32"
      }, {
        name: "ni ni-chart-pie-35"
      }, {
        name: "ni ni-chat-round"
      }, {
        name: "ni ni-check-bold"
      }, {
        name: "ni ni-circle-08"
      }, {
        name: "ni ni-cloud-download-95"
      }, {
        name: "ni ni-cloud-upload-96"
      }, {
        name: "ni ni-compass-04"
      }, {
        name: "ni ni-controller"
      }, {
        name: "ni ni-credit-card"
      }, {
        name: "ni ni-curved-next"
      }, {
        name: "ni ni-delivery-fast"
      }, {
        name: "ni ni-diamond"
      }, {
        name: "ni ni-email-83"
      }, {
        name: "ni ni-fat-add"
      }, {
        name: "ni ni-fat-delete"
      }, {
        name: "ni ni-fat-remove"
      }, {
        name: "ni ni-favourite-28"
      }, {
        name: "ni ni-folder-17"
      }, {
        name: "ni ni-glasses-2"
      }, {
        name: "ni ni-hat-3"
      }, {
        name: "ni ni-headphones"
      }, {
        name: "ni ni-html5"
      }, {
        name: "ni ni-istanbul"
      }, {
        name: "ni ni-circle-08"
      }, {
        name: "ni ni-key-25"
      }, {
        name: "ni ni-laptop"
      }, {
        name: "ni ni-like-2"
      }, {
        name: "ni ni-lock-circle-open"
      }, {
        name: "ni ni-map-big"
      }, {
        name: "ni ni-mobile-button"
      }, {
        name: "ni ni-money-coins"
      }, {
        name: "ni ni-note-03"
      }, {
        name: "ni ni-notification-70"
      }, {
        name: "ni ni-palette"
      }, {
        name: "ni ni-paper-diploma"
      }, {
        name: "ni ni-pin-3"
      }, {
        name: "ni ni-planet"
      }, {
        name: "ni ni-ruler-pencil"
      }, {
        name: "ni ni-satisfied"
      }, {
        name: "ni ni-scissors"
      }, {
        name: "ni ni-send"
      }, {
        name: "ni ni-settings-gear-65"
      }, {
        name: "ni ni-settings"
      }, {
        name: "ni ni-single-02"
      }, {
        name: "ni ni-single-copy-04"
      }, {
        name: "ni ni-sound-wave"
      }, {
        name: "ni ni-spaceship"
      }, {
        name: "ni ni-square-pin"
      }, {
        name: "ni ni-support-16"
      }, {
        name: "ni ni-tablet-button"
      }, {
        name: "ni ni-tag"
      }, {
        name: "ni ni-tie-bow"
      }, {
        name: "ni ni-time-alarm"
      }, {
        name: "ni ni-trophy"
      }, {
        name: "ni ni-tv-2"
      }, {
        name: "ni ni-umbrella-13"
      }, {
        name: "ni ni-user-run"
      }, {
        name: "ni ni-vector"
      }, {
        name: "ni ni-watch-time"
      }, {
        name: "ni ni-world"
      }, {
        name: "ni ni-zoom-split-in"
      }, {
        name: "ni ni-collection"
      }, {
        name: "ni ni-image"
      }, {
        name: "ni ni-shop"
      }, {
        name: "ni ni-ungroup"
      }, {
        name: "ni ni-world-2"
      }, {
        name: "ni ni-ui-04"
      }]
    };
  },
  methods: {
    onCopy: function onCopy() {
      this.$notify({
        type: 'success',
        title: 'Copied to clipboard'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserProfile.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/UserProfile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'user-profile',
  data: function data() {
    return {
      model: {
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        country: '',
        zipCode: '',
        about: ''
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/AgentComponent.vue?vue&type=template&id=1d253bf6&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Admin/AgentComponent.vue?vue&type=template&id=1d253bf6& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "base-header",
        {
          staticClass: "pb-6 pb-8 pt-5 pt-md-8",
          attrs: { type: "gradient-success" }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Total traffic",
                      type: "gradient-red",
                      "sub-title": "350,897",
                      icon: "ni ni-active-40"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 3.48%\n            ")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Total traffic",
                      type: "gradient-orange",
                      "sub-title": "2,356",
                      icon: "ni ni-chart-pie-35"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 12.18%\n            ")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Sales",
                      type: "gradient-green",
                      "sub-title": "924",
                      icon: "ni ni-money-coins"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-danger mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-down" }),
                        _vm._v(" 5.72%\n            ")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Performance",
                      type: "gradient-info",
                      "sub-title": "49,65%",
                      icon: "ni ni-chart-bar-32"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 54.8%\n            ")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt--7" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col" },
            [_c("agents-table", { attrs: { title: "Liste des Agents" } })],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row mt-5" })
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/AgentsTable.vue?vue&type=template&id=1f590cd2&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Admin/AgentsTable.vue?vue&type=template&id=1f590cd2& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "card shadow",
      class: _vm.type === "dark" ? "bg-default" : ""
    },
    [
      _c(
        "div",
        {
          staticClass: "card-header border-0",
          class: _vm.type === "dark" ? "bg-transparent" : ""
        },
        [
          _c("div", { staticClass: "row align-items-center" }, [
            _c("div", { staticClass: "col" }, [
              _c(
                "h3",
                {
                  staticClass: "mb-0",
                  class: _vm.type === "dark" ? "text-white" : ""
                },
                [_vm._v("\n          " + _vm._s(_vm.title) + "\n        ")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col text-right" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  attrs: {
                    type: "button",
                    "data-toggle": "modal",
                    "data-target": "#exampleModalLong"
                  },
                  on: { click: _vm.create }
                },
                [_vm._v("\n          Ajouter Agent\n        ")]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "table-responsive" },
        [
          _c(
            "base-table",
            {
              staticClass: "table align-items-center table-flush",
              class: _vm.type === "dark" ? "table-dark" : "",
              attrs: {
                "thead-classes":
                  _vm.type === "dark" ? "thead-dark" : "thead-light",
                "tbody-classes": "list",
                data: _vm.tableData.data
              },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var row = ref.row
                    return [
                      _c("th", { attrs: { scope: "row" } }, [
                        _vm._v(_vm._s(row.last_name))
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(row.first_name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(row.username))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(row.address))]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(
                          "\n          " +
                            _vm._s(
                              new Date(row.birthday)
                                .toISOString()
                                .substring(0, 10)
                            ) +
                            "\n        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(row.email))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(row.phone))]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-info",
                            attrs: {
                              "data-toggle": "modal",
                              "data-target": "#exampleModalLong"
                            },
                            on: {
                              click: function($event) {
                                return _vm.edit(row)
                              }
                            }
                          },
                          [_vm._v("\n            Modifier\n          ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-warning",
                            on: {
                              click: function($event) {
                                return _vm.blockAgent(row)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(
                                  row.is_blocked ? "Débloquer" : "Bloquer"
                                ) +
                                "\n          "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger",
                            on: {
                              click: function($event) {
                                return _vm.destroy(row.id)
                              }
                            }
                          },
                          [_vm._v("\n            Supprimer\n          ")]
                        )
                      ])
                    ]
                  }
                }
              ])
            },
            [
              _c("template", { slot: "columns" }, [
                _c("th", [_vm._v("Nom")]),
                _vm._v(" "),
                _c("th", [_vm._v("Prenom")]),
                _vm._v(" "),
                _c("th", [_vm._v("Nom d'utlisateur")]),
                _vm._v(" "),
                _c("th", [_vm._v("Adresse")]),
                _vm._v(" "),
                _c("th", [_vm._v("Date de naissance")]),
                _vm._v(" "),
                _c("th", [_vm._v("E-mail")]),
                _vm._v(" "),
                _c("th", [_vm._v("Numéro Téléphone")]),
                _vm._v(" "),
                _c("th", { staticClass: "text-center" }, [_vm._v("Actions")])
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "card-footer d-flex justify-content-end",
          class: _vm.type === "dark" ? "bg-transparent" : ""
        },
        [
          _c("pagination", {
            attrs: { data: _vm.tableData },
            on: { "pagination-change-page": _vm.getAgents }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "exampleModalLong",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "exampleModalLongTitle",
            "aria-hidden": "true"
          }
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("form", [
                  _c("div", { staticClass: "modal-body" }, [
                    _c("div", { staticClass: "pl-lg-4" }, [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          {
                            staticClass: "col-lg-6",
                            class: {
                              "form-group--error": _vm.$v.nom.$error
                            }
                          },
                          [
                            _c("base-input", {
                              attrs: {
                                alternative: "",
                                label: "Nom",
                                type: "text",
                                placeholder: "Nom",
                                "input-classes": "form-control-alternative",
                                required: ""
                              },
                              model: {
                                value: _vm.$v.nom.$model,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.$v.nom,
                                    "$model",
                                    typeof $$v === "string" ? $$v.trim() : $$v
                                  )
                                },
                                expression: "$v.nom.$model"
                              }
                            }),
                            _vm._v(" "),
                            _vm.sub && !_vm.$v.nom.required
                              ? _c(
                                  "div",
                                  { staticClass: "text-danger pb-4 pt-0" },
                                  [_c("small", [_vm._v('"Nom" obligatoire !')])]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.sub && !_vm.$v.nom.minLength
                              ? _c("div", { staticClass: "text-danger pb-4" }, [
                                  _c("small", [
                                    _vm._v(
                                      '\n                      "Nom" doit comporter au minimum 3 lettres.\n                    '
                                    )
                                  ])
                                ])
                              : _vm._e()
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-lg-6",
                            class: {
                              "form-group--error": _vm.$v.prenom.$error
                            }
                          },
                          [
                            _c("base-input", {
                              attrs: {
                                alternative: "",
                                label: "Prénom",
                                type: "text",
                                placeholder: "Prénom",
                                "input-classes": "form-control-alternative",
                                required: ""
                              },
                              model: {
                                value: _vm.$v.prenom.$model,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.$v.prenom,
                                    "$model",
                                    typeof $$v === "string" ? $$v.trim() : $$v
                                  )
                                },
                                expression: "$v.prenom.$model"
                              }
                            }),
                            _vm._v(" "),
                            _vm.sub && !_vm.$v.prenom.required
                              ? _c(
                                  "div",
                                  { staticClass: "text-danger pb-4 pt-0" },
                                  [
                                    _c("small", [
                                      _vm._v('"Prénom" obligatoire !')
                                    ])
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.sub && !_vm.$v.prenom.minLength
                              ? _c("div", { staticClass: "text-danger pb-4" }, [
                                  _c("small", [
                                    _vm._v(
                                      '\n                      "Prénom" doit comporter au minimum 3 lettres.\n                    '
                                    )
                                  ])
                                ])
                              : _vm._e()
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-lg-6" },
                          [
                            _c("base-input", {
                              attrs: {
                                alternative: "",
                                type: "email",
                                label: "Adresse Email",
                                placeholder: "Agent@example.com",
                                "input-classes": "form-control-alternative",
                                required: ""
                              },
                              model: {
                                value: _vm.$v.email.$model,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.$v.email,
                                    "$model",
                                    typeof $$v === "string" ? $$v.trim() : $$v
                                  )
                                },
                                expression: "$v.email.$model"
                              }
                            }),
                            _vm._v(" "),
                            _vm.sub && !_vm.$v.email.required
                              ? _c("div", { staticClass: "text-danger pt-0" }, [
                                  _c("small", [
                                    _vm._v('"Adresse Email" obligatoire !')
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.sub && !_vm.isEmailValid()
                              ? _c(
                                  "div",
                                  { staticClass: "text-danger pb-4 pt-0" },
                                  [
                                    _c("small", [
                                      _vm._v('"Adresse Email"invalide !')
                                    ])
                                  ]
                                )
                              : _vm._e()
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-lg-6" },
                          [
                            _vm._m(1),
                            _vm._v(" "),
                            _c("datepicker", {
                              attrs: {
                                "input-class": "form-control-alternative",
                                required: "",
                                valuetype: "format"
                              },
                              model: {
                                value: _vm.$v.datnaiss.$model,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.$v.datnaiss,
                                    "$model",
                                    typeof $$v === "string" ? $$v.trim() : $$v
                                  )
                                },
                                expression: "$v.datnaiss.$model"
                              }
                            }),
                            _vm._v(" "),
                            _vm.sub && !_vm.$v.datnaiss.required
                              ? _c("div", { staticClass: "text-danger pt-0" }, [
                                  _c("small", [
                                    _vm._v('"Date de naissance obligatoire !')
                                  ])
                                ])
                              : _vm._e()
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-lg-6" },
                          [
                            _c("base-input", {
                              attrs: {
                                alternative: "",
                                label: "Nom d'utilisateur",
                                placeholder: "Nom d'utilisateur",
                                "input-classes": "form-control-alternative",
                                required: ""
                              },
                              model: {
                                value: _vm.nomuser,
                                callback: function($$v) {
                                  _vm.nomuser = $$v
                                },
                                expression: "nomuser"
                              }
                            }),
                            _vm._v(" "),
                            _vm.sub && !_vm.$v.nomuser.required
                              ? _c(
                                  "div",
                                  { staticClass: "text-danger pb-4 pt-0" },
                                  [
                                    _c("small", [
                                      _vm._v(
                                        ' "Nom d\'utilisateur" obligatoire ! '
                                      )
                                    ])
                                  ]
                                )
                              : _vm._e()
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-lg-6" },
                          [
                            _c("base-input", {
                              attrs: {
                                alternative: "",
                                type: "number",
                                label: "Numero Tel",
                                placeholder: "Numero Tel",
                                "input-classes": "form-control-alternative",
                                required: ""
                              },
                              model: {
                                value: _vm.numtl,
                                callback: function($$v) {
                                  _vm.numtl = $$v
                                },
                                expression: "numtl"
                              }
                            }),
                            _vm._v(" "),
                            _vm.sub && !_vm.$v.numtl.required
                              ? _c("div", { staticClass: "text-danger pb-4" }, [
                                  _c("small", [
                                    _vm._v('"Numero telephone" obligatoire !')
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.sub && !_vm.$v.numtl.between
                              ? _c("div", { staticClass: "text-danger pb-4" }, [
                                  _c("small", [
                                    _vm._v(
                                      '\n                      "Numreo telephone" doit comporter excatement 8 chiffres.\n                    '
                                    )
                                  ])
                                ])
                              : _vm._e()
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-lg-12" },
                          [
                            _c("base-input", {
                              attrs: {
                                alternative: "",
                                label: "Adresse",
                                placeholder: "Adresse",
                                "input-classes": "form-control-alternative",
                                required: ""
                              },
                              model: {
                                value: _vm.adr,
                                callback: function($$v) {
                                  _vm.adr = $$v
                                },
                                expression: "adr"
                              }
                            }),
                            _vm._v(" "),
                            _vm.sub && !_vm.$v.adr.required
                              ? _c("div", { staticClass: "text-danger" }, [
                                  _c("small", [
                                    _vm._v('"Adresse" obligatoire !')
                                  ])
                                ])
                              : _vm._e()
                          ],
                          1
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-secondary",
                        attrs: { type: "button", "data-dismiss": "modal" }
                      },
                      [_vm._v("\n              Fermer\n            ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.editMode ? _vm.update() : _vm.submit()
                          }
                        }
                      },
                      [_vm._v("\n              Enregistrer\n            ")]
                    )
                  ])
                ])
              ])
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLongTitle" } },
        [_vm._v("\n            Informations agent\n          ")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("label", { staticClass: "form-control-label pb-2" }, [
        _vm._v("Date de naissance *")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/Dashboard.vue?vue&type=template&id=19a1b4f4&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Admin/Dashboard.vue?vue&type=template&id=19a1b4f4& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "base-header",
        {
          staticClass: "pb-6 pb-8 pt-5 pt-md-8",
          attrs: { type: "gradient-success" }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Total traffic",
                      type: "gradient-red",
                      "sub-title": "350,897",
                      icon: "ni ni-active-40"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" })
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" })
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Total traffic",
                      type: "gradient-orange",
                      "sub-title": "2,356",
                      icon: "ni ni-chart-pie-35"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" })
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" })
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Sales",
                      type: "gradient-green",
                      "sub-title": "924",
                      icon: "ni ni-money-coins"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-danger mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-down" })
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" })
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Performance",
                      type: "gradient-info",
                      "sub-title": "49,65%",
                      icon: "ni ni-chart-bar-32"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" })
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" })
                    ])
                  ],
                  2
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt--7" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-xl-8 mb-5 mb-xl-0" },
            [
              _c(
                "card",
                {
                  attrs: { type: "default", "header-classes": "bg-transparent" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "row align-items-center",
                      attrs: { slot: "header" },
                      slot: "header"
                    },
                    [
                      _c("div", { staticClass: "col" }, [
                        _c(
                          "h6",
                          {
                            staticClass: "text-light text-uppercase ls-1 mb-1"
                          },
                          [_vm._v("Overview")]
                        ),
                        _vm._v(" "),
                        _c("h5", { staticClass: "h3 text-white mb-0" }, [
                          _vm._v("Sales value")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
                        _c(
                          "ul",
                          { staticClass: "nav nav-pills justify-content-end" },
                          [
                            _c("li", { staticClass: "nav-item mr-2 mr-md-0" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link py-2 px-3",
                                  class: {
                                    active: _vm.bigLineChart.activeIndex === 0
                                  },
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.initBigChart(0)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "span",
                                    { staticClass: "d-none d-md-block" },
                                    [_vm._v("Month")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "d-md-none" }, [
                                    _vm._v("M")
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "nav-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link py-2 px-3",
                                  class: {
                                    active: _vm.bigLineChart.activeIndex === 1
                                  },
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.initBigChart(1)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "span",
                                    { staticClass: "d-none d-md-block" },
                                    [_vm._v("Week")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "d-md-none" }, [
                                    _vm._v("W")
                                  ])
                                ]
                              )
                            ])
                          ]
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("line-chart", {
                    ref: "bigChart",
                    attrs: {
                      height: 350,
                      "chart-data": _vm.bigLineChart.chartData,
                      "extra-options": _vm.bigLineChart.extraOptions
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xl-4" },
            [
              _c(
                "card",
                { attrs: { "header-classes": "bg-transparent" } },
                [
                  _c(
                    "div",
                    {
                      staticClass: "row align-items-center",
                      attrs: { slot: "header" },
                      slot: "header"
                    },
                    [
                      _c("div", { staticClass: "col" }, [
                        _c(
                          "h6",
                          {
                            staticClass: "text-uppercase text-muted ls-1 mb-1"
                          },
                          [_vm._v("Performance")]
                        ),
                        _vm._v(" "),
                        _c("h5", { staticClass: "h3 mb-0" }, [
                          _vm._v("Total orders")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("bar-chart", {
                    ref: "barChart",
                    attrs: {
                      height: 350,
                      "chart-data": _vm.redBarChart.chartData
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row mt-5" }, [
          _c(
            "div",
            { staticClass: "col-xl-8 mb-5 mb-xl-0" },
            [_c("page-visits-table")],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xl-4" },
            [_c("social-traffic-table")],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/Dashboard/PageVisitsTable.vue?vue&type=template&id=75e0b36e&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Admin/Dashboard/PageVisitsTable.vue?vue&type=template&id=75e0b36e& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "table-responsive" },
      [
        _c(
          "base-table",
          {
            attrs: { "thead-classes": "thead-light", data: _vm.tableData },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c("th", { attrs: { scope: "row" } }, [
                      _vm._v(_vm._s(row.page))
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(row.visitors))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(row.unique))]),
                    _vm._v(" "),
                    _c("td", [
                      _c("i", {
                        staticClass: "fas fa-arrow-up text-success mr-3",
                        class:
                          row.bounceRateDirection === "up"
                            ? "text-success"
                            : "text-danger"
                      }),
                      _vm._v(
                        "\n          " + _vm._s(row.bounceRate) + "\n        "
                      )
                    ])
                  ]
                }
              }
            ])
          },
          [
            _c("template", { slot: "columns" }, [
              _c("th", [_vm._v("Page name")]),
              _vm._v(" "),
              _c("th", [_vm._v("Visitors")]),
              _vm._v(" "),
              _c("th", [_vm._v("Unique users")]),
              _vm._v(" "),
              _c("th", [_vm._v("Bounce rate")])
            ])
          ],
          2
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header border-0" }, [
      _c("div", { staticClass: "row align-items-center" }, [
        _c("div", { staticClass: "col" }, [
          _c("h3", { staticClass: "mb-0" }, [_vm._v("Page visits")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col text-right" }, [
          _c(
            "a",
            { staticClass: "btn btn-sm btn-primary", attrs: { href: "#!" } },
            [_vm._v("See all")]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/Dashboard/SocialTrafficTable.vue?vue&type=template&id=14ab8cd7&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Admin/Dashboard/SocialTrafficTable.vue?vue&type=template&id=14ab8cd7& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "card-header border-0" }, [
      _c("div", { staticClass: "row align-items-center" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col text-right" },
          [
            _c("base-button", { attrs: { size: "sm", type: "primary" } }, [
              _vm._v("See all")
            ])
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "table-responsive" },
      [
        _c(
          "base-table",
          {
            attrs: { "thead-classes": "thead-light", data: _vm.tableData },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c("th", { attrs: { scope: "row" } }, [
                      _vm._v("\n          " + _vm._s(row.name) + "\n        ")
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n          " + _vm._s(row.visitors) + "\n        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "div",
                        { staticClass: "d-flex align-items-center" },
                        [
                          _c("span", { staticClass: "mr-2" }, [
                            _vm._v(_vm._s(row.progress) + "%")
                          ]),
                          _vm._v(" "),
                          _c("base-progress", {
                            staticClass: "pt-0",
                            attrs: {
                              type: row.progressType,
                              "show-percentage": false,
                              value: row.progress
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ]
                }
              }
            ])
          },
          [
            _c("template", { slot: "columns" }, [
              _c("th", [_vm._v("Referral")]),
              _vm._v(" "),
              _c("th", [_vm._v("Visitors")]),
              _vm._v(" "),
              _c("th")
            ])
          ],
          2
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h3", { staticClass: "mb-0" }, [_vm._v("Social traffic")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/InterventionComponent.vue?vue&type=template&id=ae10aa50&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Admin/InterventionComponent.vue?vue&type=template&id=ae10aa50& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("base-header", {
        staticClass: "pb-6 pb-8 pt-5 pt-md-8",
        attrs: { type: "gradient-success" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt--7" }, [
        _c("div", { staticClass: "row mt-5" }, [
          _c(
            "div",
            { staticClass: "col" },
            [
              _c("interventions-table", {
                attrs: { type: "light", title: "Interventions" }
              })
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/InterventionsTable.vue?vue&type=template&id=37edd930&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Admin/InterventionsTable.vue?vue&type=template&id=37edd930& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "card shadow",
      class: _vm.type === "dark" ? "bg-default" : ""
    },
    [
      _c(
        "div",
        {
          staticClass: "card-header border-0",
          class: _vm.type === "dark" ? "bg-transparent" : ""
        },
        [
          _c("div", { staticClass: "row align-items-center" }, [
            _c("div", { staticClass: "col" }, [
              _c(
                "h3",
                {
                  staticClass: "mb-0",
                  class: _vm.type === "dark" ? "text-white" : ""
                },
                [_vm._v(_vm._s(_vm.title))]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "table-responsive" },
        [
          _c(
            "base-table",
            {
              staticClass: "table align-items-center table-flush",
              class: _vm.type === "dark" ? "table-dark" : "",
              attrs: {
                "thead-classes":
                  _vm.type === "dark" ? "thead-dark" : "thead-light",
                "tbody-classes": "list",
                data: _vm.tableData.data
              },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var row = ref.row
                    return [
                      _c("th", { attrs: { scope: "row" } }, [
                        _vm._v(_vm._s(row.nom))
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(row.gsm))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(row.adresse))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(row.map))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(row.nombre_lignes))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(row.puissance_moyenne))]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-success",
                            staticStyle: { width: "100px" },
                            attrs: {
                              "data-toggle": "modal",
                              "data-target": "#exampleModalLong"
                            },
                            on: {
                              click: function($event) {
                                return _vm.ShowLignes(row.id)
                              }
                            }
                          },
                          [_vm._v("Lignes")]
                        )
                      ])
                    ]
                  }
                }
              ])
            },
            [
              _c("template", { slot: "columns" }, [
                _c("th", [_vm._v("Nom")]),
                _vm._v(" "),
                _c("th", [_vm._v("Numéro GSM")]),
                _vm._v(" "),
                _c("th", [_vm._v("Adresse")]),
                _vm._v(" "),
                _c("th", [_vm._v("Localisation")]),
                _vm._v(" "),
                _c("th", [_vm._v("Nombre de Lignes")]),
                _vm._v(" "),
                _c("th", [_vm._v("Puissance Moyenne")]),
                _vm._v(" "),
                _c("th", { staticClass: "text-center" }, [_vm._v("Actions")])
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", {
        staticClass: "card-footer d-flex justify-content-end",
        class: _vm.type === "dark" ? "bg-transparent" : ""
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "exampleModalLong",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "exampleModalLongTitle",
            "aria-hidden": "true"
          }
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("form", [
                  _c("table", { staticClass: "table" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.ligneData, function(item, index) {
                        return _c("tr", { key: index }, [
                          _c("th", { attrs: { scope: "row" } }, [
                            _vm._v(_vm._s(index + 1))
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(item.nombre_point_limineux))
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(item.puissance_moyenne))]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "button",
                              {
                                class: {
                                  "btn btn-danger": item.etat,
                                  "btn btn-success": !item.etat
                                },
                                staticStyle: { width: "100px" },
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.toggleStatus(item)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(item.etat ? "Eteindre" : "Allumer")
                                )
                              ]
                            )
                          ])
                        ])
                      }),
                      0
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(2)
                ])
              ])
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLongTitle" } },
        [_vm._v("Lignes")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-light" }, [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Points Limineux")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Puissance")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("ACTIONS")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Fermer")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/LignesTable.vue?vue&type=template&id=39bc76e4&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Admin/LignesTable.vue?vue&type=template&id=39bc76e4& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("base-header", {
        staticClass: "pb-6 pb-8 pt-5 pt-md-8",
        attrs: { type: "gradient-success" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt--7" }, [
        _c(
          "div",
          {
            staticClass: "card shadow",
            class: _vm.type === "dark" ? "bg-default" : ""
          },
          [
            _c(
              "div",
              {
                staticClass: "card-header border-0",
                class: _vm.type === "dark" ? "bg-transparent" : ""
              },
              [
                _c("div", { staticClass: "row align-items-center" }, [
                  _c("div", { staticClass: "col" }, [
                    _c(
                      "h3",
                      {
                        staticClass: "mb-0",
                        class: _vm.type === "dark" ? "text-white" : ""
                      },
                      [_vm._v(_vm._s(_vm.title))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col text-right" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: {
                          type: "button",
                          "data-toggle": "modal",
                          "data-target": "#exampleModalLong"
                        },
                        on: { click: _vm.create }
                      },
                      [_vm._v("Ajouter Ligne")]
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "table-responsive" },
              [
                _c(
                  "base-table",
                  {
                    staticClass: "table align-items-center table-flush",
                    class: _vm.type === "dark" ? "table-dark" : "",
                    attrs: {
                      "thead-classes":
                        _vm.type === "dark" ? "thead-dark" : "thead-light",
                      "tbody-classes": "list",
                      data: _vm.tableData
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var row = ref.row
                          var index = ref.index
                          return [
                            _c("th", { attrs: { scope: "row" } }, [
                              _vm._v(_vm._s(index + 1))
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(row.nombre_point_limineux))
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(row.puissance_moyenne))]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-info",
                                  attrs: {
                                    "data-toggle": "modal",
                                    "data-target": "#exampleModalLong"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.edit(row)
                                    }
                                  }
                                },
                                [_vm._v("Modifier")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-danger",
                                  on: {
                                    click: function($event) {
                                      return _vm.destroy(row.id)
                                    }
                                  }
                                },
                                [_vm._v("Supprimer")]
                              )
                            ])
                          ]
                        }
                      }
                    ])
                  },
                  [
                    _c("template", { slot: "columns" }, [
                      _c("th", [_vm._v("Ligne")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Nombre de points limineux")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Puissance d'un point limineux")]),
                      _vm._v(" "),
                      _c("th", { staticClass: "text-center" }, [
                        _vm._v("Actions")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", {
              staticClass: "card-footer d-flex justify-content-end",
              class: _vm.type === "dark" ? "bg-transparent" : ""
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "modal fade",
                attrs: {
                  id: "exampleModalLong",
                  tabindex: "-1",
                  role: "dialog",
                  "aria-labelledby": "exampleModalLongTitle",
                  "aria-hidden": "true"
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "modal-dialog", attrs: { role: "document" } },
                  [
                    _c("div", { staticClass: "modal-content" }, [
                      _vm._m(0),
                      _vm._v(" "),
                      _c("form", [
                        _c("div", { staticClass: "modal-body" }, [
                          _c("div", [
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "col-lg-6" },
                                [
                                  _c("base-input", {
                                    attrs: {
                                      alternative: "",
                                      label: "Nombre de points limineux",
                                      type: "number",
                                      placeholder: "Nombre de points limineux",
                                      "input-classes":
                                        "form-control-alternative",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.nbl,
                                      callback: function($$v) {
                                        _vm.nbl = _vm._n($$v)
                                      },
                                      expression: "nbl"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm.sub && !_vm.$v.nbl.required
                                    ? _c(
                                        "div",
                                        { staticClass: "text-danger pb-4" },
                                        [
                                          _c("small", [
                                            _vm._v(
                                              '\n                          "Nombre de points\n                          limineux" obligatoire\n                          !\n                        '
                                            )
                                          ])
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.sub && !_vm.$v.nbl.between
                                    ? _c(
                                        "div",
                                        { staticClass: "text-danger pb-4" },
                                        [
                                          _c("small", [
                                            _vm._v(
                                              '\n                          "Nombre de points\n                          limineux" doit comporter\n                          au minimum 1 point\n                          !\n                        '
                                            )
                                          ])
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-lg-6" },
                                [
                                  _c("base-input", {
                                    attrs: {
                                      alternative: "",
                                      label: "Puissance d'un point limineux",
                                      type: "number",
                                      placeholder:
                                        "Puissance d'un point limineux",
                                      "input-classes":
                                        "form-control-alternative",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.pu,
                                      callback: function($$v) {
                                        _vm.pu = _vm._n($$v)
                                      },
                                      expression: "pu"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm.sub && !_vm.$v.pu.required
                                    ? _c(
                                        "div",
                                        { staticClass: "text-danger pb-4" },
                                        [
                                          _c("small", [
                                            _vm._v(
                                              '\n                          "Puissance d\'un point\n                          limineux" obligatoire\n                          !\n                        '
                                            )
                                          ])
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.sub && !_vm.$v.pu.between
                                    ? _c(
                                        "div",
                                        { staticClass: "text-danger pb-4" },
                                        [
                                          _c("small", [
                                            _vm._v(
                                              '\n                          "Puissance d\'un point\n                          limineux" doit etre au\n                          minimum 250 volt.\n                        '
                                            )
                                          ])
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "modal-footer" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-secondary",
                              attrs: { type: "button", "data-dismiss": "modal" }
                            },
                            [_vm._v("Fermer")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-success",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  _vm.editMode ? _vm.update() : _vm.submit()
                                }
                              }
                            },
                            [_vm._v("Enregistrer")]
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ]
            )
          ]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLongTitle" } },
        [_vm._v("Informations Ligne")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/NicheComponent.vue?vue&type=template&id=c0cb2c14&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Admin/NicheComponent.vue?vue&type=template&id=c0cb2c14& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "base-header",
        {
          staticClass: "pb-6 pb-8 pt-5 pt-md-8",
          attrs: { type: "gradient-success" }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Total traffic",
                      type: "gradient-red",
                      "sub-title": "350,897",
                      icon: "ni ni-active-40"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 3.48%\n            ")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Total traffic",
                      type: "gradient-orange",
                      "sub-title": "2,356",
                      icon: "ni ni-chart-pie-35"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 12.18%\n            ")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Sales",
                      type: "gradient-green",
                      "sub-title": "924",
                      icon: "ni ni-money-coins"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-danger mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-down" }),
                        _vm._v(" 5.72%\n            ")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Performance",
                      type: "gradient-info",
                      "sub-title": "49,65%",
                      icon: "ni ni-chart-bar-32"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 54.8%\n            ")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt--7" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col" },
            [_c("niches-table", { attrs: { title: "Liste des niches" } })],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row mt-5" })
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/NichesTable.vue?vue&type=template&id=a2bac25c&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Admin/NichesTable.vue?vue&type=template&id=a2bac25c& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "card shadow",
      class: _vm.type === "dark" ? "bg-default" : ""
    },
    [
      _c(
        "div",
        {
          staticClass: "card-header border-0",
          class: _vm.type === "dark" ? "bg-transparent" : ""
        },
        [
          _c("div", { staticClass: "row align-items-center" }, [
            _c("div", { staticClass: "col" }, [
              _c(
                "h3",
                {
                  staticClass: "mb-0",
                  class: _vm.type === "dark" ? "text-white" : ""
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.title) +
                      "\n                "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col text-right" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: {
                    type: "button",
                    "data-toggle": "modal",
                    "data-target": "#exampleModalLong"
                  },
                  on: { click: _vm.create }
                },
                [
                  _vm._v(
                    "\n                    Ajouter Niche\n                "
                  )
                ]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "table-responsive" },
        [
          _c(
            "base-table",
            {
              staticClass: "table align-items-center table-flush",
              class: _vm.type === "dark" ? "table-dark" : "",
              attrs: {
                "thead-classes":
                  _vm.type === "dark" ? "thead-dark" : "thead-light",
                "tbody-classes": "list",
                data: _vm.tableData.data
              },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var row = ref.row
                    return [
                      _c("th", { attrs: { scope: "row" } }, [
                        _vm._v(_vm._s(row.nom))
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(row.gsm))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(row.adresse))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(row.map))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(row.nombre_lignes))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(row.puissance_moyenne))]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-success",
                            on: {
                              click: function($event) {
                                return _vm.ShowLignes(row.id)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                        Lignes\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-info",
                            attrs: {
                              "data-toggle": "modal",
                              "data-target": "#exampleModalLong"
                            },
                            on: {
                              click: function($event) {
                                return _vm.edit(row)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                        Modifier\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger",
                            on: {
                              click: function($event) {
                                return _vm.destroy(row.id)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                        Supprimer\n                    "
                            )
                          ]
                        )
                      ])
                    ]
                  }
                }
              ])
            },
            [
              _c("template", { slot: "columns" }, [
                _c("th", [_vm._v("Nom")]),
                _vm._v(" "),
                _c("th", [_vm._v("Numéro GSM")]),
                _vm._v(" "),
                _c("th", [_vm._v("Adresse")]),
                _vm._v(" "),
                _c("th", [_vm._v("Localisation")]),
                _vm._v(" "),
                _c("th", [_vm._v("Nombre de Lignes")]),
                _vm._v(" "),
                _c("th", [_vm._v("Puissance Moyenne")]),
                _vm._v(" "),
                _c("th", [_vm._v("Actions")])
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "card-footer d-flex justify-content-end",
          class: _vm.type === "dark" ? "bg-transparent" : ""
        },
        [
          _c("pagination", {
            attrs: { data: _vm.tableData },
            on: { "pagination-change-page": _vm.getNiches }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "exampleModalLong",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "exampleModalLongTitle",
            "aria-hidden": "true"
          }
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("form", [
                  _c("div", { staticClass: "modal-body" }, [
                    _c("div", { staticClass: "pl-lg-4" }, [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-lg-6" },
                          [
                            _c("base-input", {
                              attrs: {
                                alternative: "",
                                placeholder: "Nom",
                                type: "text",
                                label: "Nom",
                                "input-classes": "form-control-alternative",
                                required: ""
                              },
                              model: {
                                value: _vm.nom,
                                callback: function($$v) {
                                  _vm.nom = $$v
                                },
                                expression: "nom"
                              }
                            }),
                            _vm._v(" "),
                            _vm.subl && !_vm.$v.nom.required
                              ? _c(
                                  "div",
                                  { staticClass: "text-danger pb-4 pt-0" },
                                  [_c("small", [_vm._v('"Nom" obligatoire !')])]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.subl && !_vm.$v.nom.minLength
                              ? _c("div", { staticClass: "text-danger pb-4" }, [
                                  _c("small", [
                                    _vm._v(
                                      '\n                                            "Nom" doit comporter au minimum\n                                            ' +
                                        _vm._s(
                                          _vm.$v.nom.$params.minLength.min
                                        ) +
                                        "\n                                            lettres.\n                                        "
                                    )
                                  ])
                                ])
                              : _vm._e()
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-lg-6" },
                          [
                            _c("base-input", {
                              attrs: {
                                alternative: "",
                                type: "number",
                                label: "Numero GSM",
                                placeholder: "Numero GSM",
                                "input-classes": "form-control-alternative",
                                required: ""
                              },
                              model: {
                                value: _vm.gsm,
                                callback: function($$v) {
                                  _vm.gsm = $$v
                                },
                                expression: "gsm"
                              }
                            }),
                            _vm._v(" "),
                            _vm.subl && !_vm.$v.gsm.required
                              ? _c("div", { staticClass: "text-danger pb-4" }, [
                                  _c("small", [
                                    _vm._v(
                                      '\n                                            "Numero GSM" obligatoire !\n                                        '
                                    )
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.subl && !_vm.$v.gsm.between
                              ? _c("div", { staticClass: "text-danger pb-4" }, [
                                  _c("small", [
                                    _vm._v(
                                      '\n                                            "Numre GSM" doit comporter\n                                            excatement 8 chiffres.\n                                        '
                                    )
                                  ])
                                ])
                              : _vm._e()
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-lg-6" },
                          [
                            _c("base-input", {
                              attrs: {
                                alternative: "",
                                label: "Localisation",
                                placeholder: "Localisation",
                                "input-classes": "form-control-alternative",
                                required: ""
                              },
                              model: {
                                value: _vm.map,
                                callback: function($$v) {
                                  _vm.map = $$v
                                },
                                expression: "map"
                              }
                            }),
                            _vm._v(" "),
                            _vm.subl && !_vm.$v.map.required
                              ? _c("div", { staticClass: "text-danger pb-4" }, [
                                  _c("small", [
                                    _vm._v(
                                      '\n                                            "Localisation" obligatoire !\n                                        '
                                    )
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.subl && !_vm.$v.map.minLength
                              ? _c("div", { staticClass: "text-danger" }, [
                                  _c("small", [
                                    _vm._v(
                                      '\n                                            "Localisation" doit comporter au\n                                            minimum 20 lettres!\n                                        '
                                    )
                                  ])
                                ])
                              : _vm._e()
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-lg-6" },
                          [
                            _c("base-input", {
                              attrs: {
                                alternative: "",
                                label: "Adresse",
                                placeholder: "Adresse",
                                "input-classes": "form-control-alternative",
                                required: ""
                              },
                              model: {
                                value: _vm.adr,
                                callback: function($$v) {
                                  _vm.adr = $$v
                                },
                                expression: "adr"
                              }
                            }),
                            _vm._v(" "),
                            _vm.subl && !_vm.$v.adr.required
                              ? _c("div", { staticClass: "text-danger" }, [
                                  _c("small", [
                                    _vm._v('"Adresse" obligatoire !')
                                  ])
                                ])
                              : _vm._e()
                          ],
                          1
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-secondary",
                        attrs: { type: "button", "data-dismiss": "modal" }
                      },
                      [
                        _vm._v(
                          "\n                            Fermer\n                        "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.editMode ? _vm.updateNiche() : _vm.submit()
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                            Enregistrer\n                        "
                        )
                      ]
                    )
                  ])
                ])
              ])
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLongTitle" } },
        [
          _vm._v(
            "\n                        Informations niche\n                    "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Super_Admin/AdminsComponent.vue?vue&type=template&id=0d8bdfe7&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Super_Admin/AdminsComponent.vue?vue&type=template&id=0d8bdfe7& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "base-header",
        {
          staticClass: "pb-6 pb-8 pt-5 pt-md-8",
          attrs: { type: "gradient-success" }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Total traffic",
                      type: "gradient-red",
                      "sub-title": "350,897",
                      icon: "ni ni-active-40"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 3.48%\n            ")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Total traffic",
                      type: "gradient-orange",
                      "sub-title": "2,356",
                      icon: "ni ni-chart-pie-35"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 12.18%\n            ")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Sales",
                      type: "gradient-green",
                      "sub-title": "924",
                      icon: "ni ni-money-coins"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-danger mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-down" }),
                        _vm._v(" 5.72%\n            ")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Performance",
                      type: "gradient-info",
                      "sub-title": "49,65%",
                      icon: "ni ni-chart-bar-32"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 54.8%\n            ")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt--7" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col" },
            [_c("admins-table", { attrs: { title: "Liste des Admins" } })],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Icons.vue?vue&type=template&id=279a5c8b&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Icons.vue?vue&type=template&id=279a5c8b& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "base-header",
        {
          staticClass: "pb-6 pb-8 pt-5 pt-md-8",
          attrs: { type: "gradient-success" }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Total traffic",
                      type: "gradient-red",
                      "sub-title": "350,897",
                      icon: "ni ni-active-40"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 3.48%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Total traffic",
                      type: "gradient-orange",
                      "sub-title": "2,356",
                      icon: "ni ni-chart-pie-35"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 12.18%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Sales",
                      type: "gradient-green",
                      "sub-title": "924",
                      icon: "ni ni-money-coins"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-danger mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-down" }),
                        _vm._v(" 5.72%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Performance",
                      type: "gradient-info",
                      "sub-title": "49,65%",
                      icon: "ni ni-chart-bar-32"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 54.8%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt--7" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col" }, [
            _c("div", { staticClass: "card shadow" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "div",
                  { staticClass: "row icon-examples" },
                  _vm._l(_vm.icons, function(icon, index) {
                    return _c(
                      "div",
                      {
                        key: icon.name + index,
                        staticClass: "col-lg-3 col-md-6"
                      },
                      [
                        _c(
                          "button",
                          {
                            directives: [
                              {
                                name: "b-tooltip",
                                rawName: "v-b-tooltip.hover.top",
                                modifiers: { hover: true, top: true }
                              },
                              {
                                name: "clipboard",
                                rawName: "v-clipboard:copy",
                                value: icon.name,
                                expression: "icon.name",
                                arg: "copy"
                              },
                              {
                                name: "clipboard",
                                rawName: "v-clipboard:success",
                                value: _vm.onCopy,
                                expression: "onCopy",
                                arg: "success"
                              }
                            ],
                            staticClass: "btn-icon-clipboard",
                            attrs: {
                              type: "button",
                              title: icon.name,
                              "data-clipboard-text": "air-baloon"
                            }
                          },
                          [
                            _c("div", [
                              _c("i", { class: icon.name }),
                              _vm._v(" "),
                              _c("span", [
                                _vm._v(_vm._s(icon.name.substring(6)))
                              ])
                            ])
                          ]
                        )
                      ]
                    )
                  }),
                  0
                )
              ])
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header bg-transparent" }, [
      _c("h3", { staticClass: "mb-0" }, [_vm._v("Icons")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserProfile.vue?vue&type=template&id=19ecac0f&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/UserProfile.vue?vue&type=template&id=19ecac0f& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "base-header",
        {
          staticClass: "header pb-8 pt-5 pt-lg-8 d-flex align-items-center",
          staticStyle: {
            "min-height": "600px",
            "background-image": "url(img/theme/profile-cover.jpg)",
            "background-size": "cover",
            "background-position": "center top"
          }
        },
        [
          _c("span", { staticClass: "mask bg-gradient-success opacity-8" }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "container-fluid d-flex align-items-center" },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-7 col-md-10" }, [
                  _c("h1", { staticClass: "display-2 text-white" }, [
                    _vm._v("Hello Jesse")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-white mt-0 mb-5" }, [
                    _vm._v(
                      "This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks"
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    { staticClass: "btn btn-info", attrs: { href: "#!" } },
                    [_vm._v("Edit profile")]
                  )
                ])
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt--7" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xl-4 order-xl-2 mb-5 mb-xl-0" }, [
            _c("div", { staticClass: "card card-profile shadow" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"
                },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex justify-content-between" },
                    [
                      _c(
                        "base-button",
                        {
                          staticClass: "mr-4",
                          attrs: { size: "sm", type: "info" }
                        },
                        [_vm._v("Connect")]
                      ),
                      _vm._v(" "),
                      _c(
                        "base-button",
                        {
                          staticClass: "float-right",
                          attrs: { size: "sm", type: "default" }
                        },
                        [_vm._v("Message")]
                      )
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _vm._m(1)
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xl-8 order-xl-1" },
            [
              _c(
                "card",
                { attrs: { shadow: "", type: "secondary" } },
                [
                  _c(
                    "div",
                    {
                      staticClass: "bg-white border-0",
                      attrs: { slot: "header" },
                      slot: "header"
                    },
                    [
                      _c("div", { staticClass: "row align-items-center" }, [
                        _c("div", { staticClass: "col-8" }, [
                          _c("h3", { staticClass: "mb-0" }, [
                            _vm._v("My account")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-4 text-right" }, [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-sm btn-primary",
                              attrs: { href: "#!" }
                            },
                            [_vm._v("Settings")]
                          )
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  [
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                          }
                        }
                      },
                      [
                        _c(
                          "h6",
                          { staticClass: "heading-small text-muted mb-4" },
                          [_vm._v("User information")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "pl-lg-4" }, [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-6" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "Username",
                                    placeholder: "Username",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.username,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "username", $$v)
                                    },
                                    expression: "model.username"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-lg-6" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "Email address",
                                    placeholder: "jesse@example.com",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.email,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "email", $$v)
                                    },
                                    expression: "model.email"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-6" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "First name",
                                    placeholder: "First name",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.firstName,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "firstName", $$v)
                                    },
                                    expression: "model.firstName"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-lg-6" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "Last name",
                                    placeholder: "Last name",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.lastName,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "lastName", $$v)
                                    },
                                    expression: "model.lastName"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("hr", { staticClass: "my-4" }),
                        _vm._v(" "),
                        _c(
                          "h6",
                          { staticClass: "heading-small text-muted mb-4" },
                          [_vm._v("Contact information")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "pl-lg-4" }, [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-md-12" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "Address",
                                    placeholder: "Home Address",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.address,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "address", $$v)
                                    },
                                    expression: "model.address"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-4" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "City",
                                    placeholder: "City",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.city,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "city", $$v)
                                    },
                                    expression: "model.city"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-lg-4" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "Country",
                                    placeholder: "Country",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.country,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "country", $$v)
                                    },
                                    expression: "model.country"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-lg-4" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "Postal code",
                                    placeholder: "Postal code",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.zipCode,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "zipCode", $$v)
                                    },
                                    expression: "model.zipCode"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("hr", { staticClass: "my-4" }),
                        _vm._v(" "),
                        _c(
                          "h6",
                          { staticClass: "heading-small text-muted mb-4" },
                          [_vm._v("About me")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "pl-lg-4" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "base-input",
                                {
                                  attrs: { alternative: "", label: "About Me" }
                                },
                                [
                                  _c(
                                    "textarea",
                                    {
                                      staticClass:
                                        "form-control form-control-alternative",
                                      attrs: {
                                        rows: "4",
                                        placeholder: "A few words about you ..."
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "A beautiful Dashboard for Bootstrap 4. It is Free and Open Source."
                                      )
                                    ]
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ])
                      ]
                    )
                  ]
                ],
                2
              )
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-lg-3 order-lg-2" }, [
        _c("div", { staticClass: "card-profile-image" }, [
          _c("a", { attrs: { href: "#" } }, [
            _c("img", {
              staticClass: "rounded-circle",
              attrs: { src: "img/theme/team-4-800x800.jpg" }
            })
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body pt-0 pt-md-4" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col" }, [
          _c(
            "div",
            {
              staticClass:
                "card-profile-stats d-flex justify-content-center mt-md-5"
            },
            [
              _c("div", [
                _c("span", { staticClass: "heading" }, [_vm._v("22")]),
                _vm._v(" "),
                _c("span", { staticClass: "description" }, [_vm._v("Friends")])
              ]),
              _vm._v(" "),
              _c("div", [
                _c("span", { staticClass: "heading" }, [_vm._v("10")]),
                _vm._v(" "),
                _c("span", { staticClass: "description" }, [_vm._v("Photos")])
              ]),
              _vm._v(" "),
              _c("div", [
                _c("span", { staticClass: "heading" }, [_vm._v("89")]),
                _vm._v(" "),
                _c("span", { staticClass: "description" }, [_vm._v("Comments")])
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text-center" }, [
        _c("h3", [
          _vm._v("\n                                Jessica Jones"),
          _c("span", { staticClass: "font-weight-light" }, [_vm._v(", 27")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "h5 font-weight-300" }, [
          _c("i", { staticClass: "ni location_pin mr-2" }),
          _vm._v("Bucharest, Romania\n                            ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "h5 mt-4" }, [
          _c("i", { staticClass: "ni business_briefcase-24 mr-2" }),
          _vm._v(
            "Solution Manager - Creative Tim Officer\n                            "
          )
        ]),
        _vm._v(" "),
        _c("div", [
          _c("i", { staticClass: "ni education_hat mr-2" }),
          _vm._v("University of Computer Science\n                            ")
        ]),
        _vm._v(" "),
        _c("hr", { staticClass: "my-4" }),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music."
          )
        ]),
        _vm._v(" "),
        _c("a", { attrs: { href: "#" } }, [_vm._v("Show more")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Admin/AgentComponent.vue":
/*!***********************************************!*\
  !*** ./resources/js/Admin/AgentComponent.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AgentComponent_vue_vue_type_template_id_1d253bf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgentComponent.vue?vue&type=template&id=1d253bf6& */ "./resources/js/Admin/AgentComponent.vue?vue&type=template&id=1d253bf6&");
/* harmony import */ var _AgentComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AgentComponent.vue?vue&type=script&lang=js& */ "./resources/js/Admin/AgentComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AgentComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AgentComponent_vue_vue_type_template_id_1d253bf6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AgentComponent_vue_vue_type_template_id_1d253bf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Admin/AgentComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Admin/AgentComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Admin/AgentComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AgentComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/AgentComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Admin/AgentComponent.vue?vue&type=template&id=1d253bf6&":
/*!******************************************************************************!*\
  !*** ./resources/js/Admin/AgentComponent.vue?vue&type=template&id=1d253bf6& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentComponent_vue_vue_type_template_id_1d253bf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AgentComponent.vue?vue&type=template&id=1d253bf6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/AgentComponent.vue?vue&type=template&id=1d253bf6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentComponent_vue_vue_type_template_id_1d253bf6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentComponent_vue_vue_type_template_id_1d253bf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Admin/AgentsTable.vue":
/*!********************************************!*\
  !*** ./resources/js/Admin/AgentsTable.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AgentsTable_vue_vue_type_template_id_1f590cd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgentsTable.vue?vue&type=template&id=1f590cd2& */ "./resources/js/Admin/AgentsTable.vue?vue&type=template&id=1f590cd2&");
/* harmony import */ var _AgentsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AgentsTable.vue?vue&type=script&lang=js& */ "./resources/js/Admin/AgentsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AgentsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AgentsTable_vue_vue_type_template_id_1f590cd2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AgentsTable_vue_vue_type_template_id_1f590cd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Admin/AgentsTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Admin/AgentsTable.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Admin/AgentsTable.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AgentsTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/AgentsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Admin/AgentsTable.vue?vue&type=template&id=1f590cd2&":
/*!***************************************************************************!*\
  !*** ./resources/js/Admin/AgentsTable.vue?vue&type=template&id=1f590cd2& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentsTable_vue_vue_type_template_id_1f590cd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AgentsTable.vue?vue&type=template&id=1f590cd2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/AgentsTable.vue?vue&type=template&id=1f590cd2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentsTable_vue_vue_type_template_id_1f590cd2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgentsTable_vue_vue_type_template_id_1f590cd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Admin/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/Admin/Dashboard.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_19a1b4f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=19a1b4f4& */ "./resources/js/Admin/Dashboard.vue?vue&type=template&id=19a1b4f4&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/Admin/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_19a1b4f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_19a1b4f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Admin/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Admin/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Admin/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Admin/Dashboard.vue?vue&type=template&id=19a1b4f4&":
/*!*************************************************************************!*\
  !*** ./resources/js/Admin/Dashboard.vue?vue&type=template&id=19a1b4f4& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_19a1b4f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=19a1b4f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/Dashboard.vue?vue&type=template&id=19a1b4f4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_19a1b4f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_19a1b4f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Admin/Dashboard/PageVisitsTable.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Admin/Dashboard/PageVisitsTable.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageVisitsTable_vue_vue_type_template_id_75e0b36e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageVisitsTable.vue?vue&type=template&id=75e0b36e& */ "./resources/js/Admin/Dashboard/PageVisitsTable.vue?vue&type=template&id=75e0b36e&");
/* harmony import */ var _PageVisitsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageVisitsTable.vue?vue&type=script&lang=js& */ "./resources/js/Admin/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageVisitsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageVisitsTable_vue_vue_type_template_id_75e0b36e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageVisitsTable_vue_vue_type_template_id_75e0b36e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Admin/Dashboard/PageVisitsTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Admin/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Admin/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageVisitsTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Admin/Dashboard/PageVisitsTable.vue?vue&type=template&id=75e0b36e&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Admin/Dashboard/PageVisitsTable.vue?vue&type=template&id=75e0b36e& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_template_id_75e0b36e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageVisitsTable.vue?vue&type=template&id=75e0b36e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/Dashboard/PageVisitsTable.vue?vue&type=template&id=75e0b36e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_template_id_75e0b36e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_template_id_75e0b36e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Admin/Dashboard/SocialTrafficTable.vue":
/*!*************************************************************!*\
  !*** ./resources/js/Admin/Dashboard/SocialTrafficTable.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SocialTrafficTable_vue_vue_type_template_id_14ab8cd7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SocialTrafficTable.vue?vue&type=template&id=14ab8cd7& */ "./resources/js/Admin/Dashboard/SocialTrafficTable.vue?vue&type=template&id=14ab8cd7&");
/* harmony import */ var _SocialTrafficTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocialTrafficTable.vue?vue&type=script&lang=js& */ "./resources/js/Admin/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SocialTrafficTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SocialTrafficTable_vue_vue_type_template_id_14ab8cd7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SocialTrafficTable_vue_vue_type_template_id_14ab8cd7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Admin/Dashboard/SocialTrafficTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Admin/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Admin/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SocialTrafficTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Admin/Dashboard/SocialTrafficTable.vue?vue&type=template&id=14ab8cd7&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Admin/Dashboard/SocialTrafficTable.vue?vue&type=template&id=14ab8cd7& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_template_id_14ab8cd7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SocialTrafficTable.vue?vue&type=template&id=14ab8cd7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/Dashboard/SocialTrafficTable.vue?vue&type=template&id=14ab8cd7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_template_id_14ab8cd7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_template_id_14ab8cd7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Admin/InterventionComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/Admin/InterventionComponent.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InterventionComponent_vue_vue_type_template_id_ae10aa50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InterventionComponent.vue?vue&type=template&id=ae10aa50& */ "./resources/js/Admin/InterventionComponent.vue?vue&type=template&id=ae10aa50&");
/* harmony import */ var _InterventionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InterventionComponent.vue?vue&type=script&lang=js& */ "./resources/js/Admin/InterventionComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InterventionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InterventionComponent_vue_vue_type_template_id_ae10aa50___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InterventionComponent_vue_vue_type_template_id_ae10aa50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Admin/InterventionComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Admin/InterventionComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Admin/InterventionComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InterventionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./InterventionComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/InterventionComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InterventionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Admin/InterventionComponent.vue?vue&type=template&id=ae10aa50&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Admin/InterventionComponent.vue?vue&type=template&id=ae10aa50& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InterventionComponent_vue_vue_type_template_id_ae10aa50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./InterventionComponent.vue?vue&type=template&id=ae10aa50& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/InterventionComponent.vue?vue&type=template&id=ae10aa50&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InterventionComponent_vue_vue_type_template_id_ae10aa50___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InterventionComponent_vue_vue_type_template_id_ae10aa50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Admin/InterventionsTable.vue":
/*!***************************************************!*\
  !*** ./resources/js/Admin/InterventionsTable.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InterventionsTable_vue_vue_type_template_id_37edd930___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InterventionsTable.vue?vue&type=template&id=37edd930& */ "./resources/js/Admin/InterventionsTable.vue?vue&type=template&id=37edd930&");
/* harmony import */ var _InterventionsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InterventionsTable.vue?vue&type=script&lang=js& */ "./resources/js/Admin/InterventionsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InterventionsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InterventionsTable_vue_vue_type_template_id_37edd930___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InterventionsTable_vue_vue_type_template_id_37edd930___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Admin/InterventionsTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Admin/InterventionsTable.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Admin/InterventionsTable.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InterventionsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./InterventionsTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/InterventionsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InterventionsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Admin/InterventionsTable.vue?vue&type=template&id=37edd930&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Admin/InterventionsTable.vue?vue&type=template&id=37edd930& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InterventionsTable_vue_vue_type_template_id_37edd930___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./InterventionsTable.vue?vue&type=template&id=37edd930& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/InterventionsTable.vue?vue&type=template&id=37edd930&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InterventionsTable_vue_vue_type_template_id_37edd930___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InterventionsTable_vue_vue_type_template_id_37edd930___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Admin/LignesTable.vue":
/*!********************************************!*\
  !*** ./resources/js/Admin/LignesTable.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LignesTable_vue_vue_type_template_id_39bc76e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LignesTable.vue?vue&type=template&id=39bc76e4& */ "./resources/js/Admin/LignesTable.vue?vue&type=template&id=39bc76e4&");
/* harmony import */ var _LignesTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LignesTable.vue?vue&type=script&lang=js& */ "./resources/js/Admin/LignesTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LignesTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LignesTable_vue_vue_type_template_id_39bc76e4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LignesTable_vue_vue_type_template_id_39bc76e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Admin/LignesTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Admin/LignesTable.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Admin/LignesTable.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LignesTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LignesTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/LignesTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LignesTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Admin/LignesTable.vue?vue&type=template&id=39bc76e4&":
/*!***************************************************************************!*\
  !*** ./resources/js/Admin/LignesTable.vue?vue&type=template&id=39bc76e4& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LignesTable_vue_vue_type_template_id_39bc76e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./LignesTable.vue?vue&type=template&id=39bc76e4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/LignesTable.vue?vue&type=template&id=39bc76e4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LignesTable_vue_vue_type_template_id_39bc76e4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LignesTable_vue_vue_type_template_id_39bc76e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Admin/NicheComponent.vue":
/*!***********************************************!*\
  !*** ./resources/js/Admin/NicheComponent.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NicheComponent_vue_vue_type_template_id_c0cb2c14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NicheComponent.vue?vue&type=template&id=c0cb2c14& */ "./resources/js/Admin/NicheComponent.vue?vue&type=template&id=c0cb2c14&");
/* harmony import */ var _NicheComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NicheComponent.vue?vue&type=script&lang=js& */ "./resources/js/Admin/NicheComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NicheComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NicheComponent_vue_vue_type_template_id_c0cb2c14___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NicheComponent_vue_vue_type_template_id_c0cb2c14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Admin/NicheComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Admin/NicheComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Admin/NicheComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NicheComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./NicheComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/NicheComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NicheComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Admin/NicheComponent.vue?vue&type=template&id=c0cb2c14&":
/*!******************************************************************************!*\
  !*** ./resources/js/Admin/NicheComponent.vue?vue&type=template&id=c0cb2c14& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NicheComponent_vue_vue_type_template_id_c0cb2c14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./NicheComponent.vue?vue&type=template&id=c0cb2c14& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/NicheComponent.vue?vue&type=template&id=c0cb2c14&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NicheComponent_vue_vue_type_template_id_c0cb2c14___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NicheComponent_vue_vue_type_template_id_c0cb2c14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Admin/NichesTable.vue":
/*!********************************************!*\
  !*** ./resources/js/Admin/NichesTable.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NichesTable_vue_vue_type_template_id_a2bac25c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NichesTable.vue?vue&type=template&id=a2bac25c& */ "./resources/js/Admin/NichesTable.vue?vue&type=template&id=a2bac25c&");
/* harmony import */ var _NichesTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NichesTable.vue?vue&type=script&lang=js& */ "./resources/js/Admin/NichesTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NichesTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NichesTable_vue_vue_type_template_id_a2bac25c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NichesTable_vue_vue_type_template_id_a2bac25c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Admin/NichesTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Admin/NichesTable.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Admin/NichesTable.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NichesTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./NichesTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/NichesTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NichesTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Admin/NichesTable.vue?vue&type=template&id=a2bac25c&":
/*!***************************************************************************!*\
  !*** ./resources/js/Admin/NichesTable.vue?vue&type=template&id=a2bac25c& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NichesTable_vue_vue_type_template_id_a2bac25c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./NichesTable.vue?vue&type=template&id=a2bac25c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/NichesTable.vue?vue&type=template&id=a2bac25c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NichesTable_vue_vue_type_template_id_a2bac25c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NichesTable_vue_vue_type_template_id_a2bac25c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Super_Admin/AdminsComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/Super_Admin/AdminsComponent.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminsComponent_vue_vue_type_template_id_0d8bdfe7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminsComponent.vue?vue&type=template&id=0d8bdfe7& */ "./resources/js/Super_Admin/AdminsComponent.vue?vue&type=template&id=0d8bdfe7&");
/* harmony import */ var _AdminsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminsComponent.vue?vue&type=script&lang=js& */ "./resources/js/Super_Admin/AdminsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminsComponent_vue_vue_type_template_id_0d8bdfe7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminsComponent_vue_vue_type_template_id_0d8bdfe7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Super_Admin/AdminsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Super_Admin/AdminsComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Super_Admin/AdminsComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AdminsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Super_Admin/AdminsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Super_Admin/AdminsComponent.vue?vue&type=template&id=0d8bdfe7&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Super_Admin/AdminsComponent.vue?vue&type=template&id=0d8bdfe7& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminsComponent_vue_vue_type_template_id_0d8bdfe7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AdminsComponent.vue?vue&type=template&id=0d8bdfe7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Super_Admin/AdminsComponent.vue?vue&type=template&id=0d8bdfe7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminsComponent_vue_vue_type_template_id_0d8bdfe7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminsComponent_vue_vue_type_template_id_0d8bdfe7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Charts/BarChart.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Charts/BarChart.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _js_components_Charts_globalOptionsMixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/components/Charts/globalOptionsMixin */ "./resources/js/components/Charts/globalOptionsMixin.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'bar-chart',
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Bar"],
  mixins: [vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"].reactiveProp, _js_components_Charts_globalOptionsMixin__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    extraOptions: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      ctx: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$watch('chartData', function (newVal, oldVal) {
      if (!oldVal) {
        _this.renderChart(_this.chartData, _this.extraOptions);
      }
    }, {
      immediate: true
    });
  }
});

/***/ }),

/***/ "./resources/js/components/Charts/LineChart.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Charts/LineChart.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _js_components_Charts_globalOptionsMixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/components/Charts/globalOptionsMixin */ "./resources/js/components/Charts/globalOptionsMixin.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'line-chart',
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  mixins: [vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"].reactiveProp, _js_components_Charts_globalOptionsMixin__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    extraOptions: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      ctx: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$watch('chartData', function (newVal, oldVal) {
      if (!oldVal) {
        _this.renderChart(_this.chartData, _this.extraOptions);
      }
    }, {
      immediate: true
    });
  }
});

/***/ }),

/***/ "./resources/js/components/Charts/config.js":
/*!**************************************************!*\
  !*** ./resources/js/components/Charts/config.js ***!
  \**************************************************/
/*! exports provided: Charts, initGlobalOptions, basicOptions, blueChartOptions, lineChartOptionsBlue, barChartOptionsGradient, pieChartOptions, purpleChartOptions, orangeChartOptions, greenChartOptions, barChartOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Charts", function() { return Charts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGlobalOptions", function() { return initGlobalOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicOptions", function() { return basicOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blueChartOptions", function() { return blueChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartOptionsBlue", function() { return lineChartOptionsBlue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartOptionsGradient", function() { return barChartOptionsGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartOptions", function() { return pieChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purpleChartOptions", function() { return purpleChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orangeChartOptions", function() { return orangeChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greenChartOptions", function() { return greenChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartOptions", function() { return barChartOptions; });
/* harmony import */ var _js_components_Charts_optionHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/components/Charts/optionHelpers */ "./resources/js/components/Charts/optionHelpers.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Charts = {
  mode: 'light',
  //(themeMode) ? themeMode : 'light';
  fonts: {
    base: 'Open Sans'
  },
  colors: {
    gray: {
      100: '#f6f9fc',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#8898aa',
      700: '#525f7f',
      800: '#32325d',
      900: '#212529'
    },
    theme: {
      'default': '#172b4d',
      'primary': '#5e72e4',
      'secondary': '#f4f5f7',
      'info': '#11cdef',
      'success': '#2dce89',
      'danger': '#f5365c',
      'warning': '#fb6340'
    },
    black: '#12263F',
    white: '#FFFFFF',
    transparent: 'transparent'
  }
};

function chartOptions(Chart) {
  var colors = Charts.colors,
      mode = Charts.mode,
      fonts = Charts.fonts; // Options

  var options = {
    defaults: {
      global: {
        responsive: true,
        maintainAspectRatio: false,
        defaultColor: mode == 'dark' ? colors.gray[700] : colors.gray[600],
        defaultFontColor: mode == 'dark' ? colors.gray[700] : colors.gray[600],
        defaultFontFamily: fonts.base,
        defaultFontSize: 13,
        layout: {
          padding: 0
        },
        legend: {
          display: false,
          position: 'bottom',
          labels: {
            usePointStyle: true,
            padding: 16
          }
        },
        elements: {
          point: {
            radius: 0,
            backgroundColor: colors.theme['primary']
          },
          line: {
            tension: .4,
            borderWidth: 4,
            borderColor: colors.theme['primary'],
            backgroundColor: colors.transparent,
            borderCapStyle: 'rounded'
          },
          rectangle: {
            backgroundColor: colors.theme['warning']
          },
          arc: {
            backgroundColor: colors.theme['primary'],
            borderColor: mode == 'dark' ? colors.gray[800] : colors.white,
            borderWidth: 4
          }
        },
        tooltips: {
          enabled: true,
          mode: 'index',
          intersect: false
        }
      },
      doughnut: {
        cutoutPercentage: 83,
        legendCallback: function legendCallback(chart) {
          var data = chart.data;
          var content = '';
          data.labels.forEach(function (label, index) {
            var bgColor = data.datasets[0].backgroundColor[index];
            content += '<span class="chart-legend-item">';
            content += '<i class="chart-legend-indicator" style="background-color: ' + bgColor + '"></i>';
            content += label;
            content += '</span>';
          });
          return content;
        }
      }
    }
  }; // yAxes

  Chart.scaleService.updateScaleDefaults('linear', {
    gridLines: {
      borderDash: [2],
      borderDashOffset: [2],
      color: mode == 'dark' ? colors.gray[900] : colors.gray[300],
      drawBorder: false,
      drawTicks: false,
      lineWidth: 0,
      zeroLineWidth: 0,
      zeroLineColor: mode == 'dark' ? colors.gray[900] : colors.gray[300],
      zeroLineBorderDash: [2],
      zeroLineBorderDashOffset: [2]
    },
    ticks: {
      beginAtZero: true,
      padding: 10,
      callback: function callback(value) {
        if (!(value % 10)) {
          return value;
        }
      }
    }
  }); // xAxes

  Chart.scaleService.updateScaleDefaults('category', {
    gridLines: {
      drawBorder: false,
      drawOnChartArea: false,
      drawTicks: false
    },
    ticks: {
      padding: 20
    },
    maxBarThickness: 10
  });
  return options;
}

function initGlobalOptions(Chart) {
  Object(_js_components_Charts_optionHelpers__WEBPACK_IMPORTED_MODULE_0__["parseOptions"])(Chart, chartOptions(Chart));
}
var basicOptions = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  responsive: true
};
var blueChartOptions = {
  scales: {
    yAxes: [{
      gridLines: {
        color: Charts.colors.gray[700],
        zeroLineColor: Charts.colors.gray[700]
      },
      ticks: {
        callback: function callback(value) {
          if (!(value % 10)) {
            return '$' + value + 'k';
          }
        }
      }
    }]
  }
};
var lineChartOptionsBlue = _objectSpread({}, basicOptions, {
  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: 'nearest',
    intersect: 0,
    position: 'nearest'
  },
  responsive: true,
  scales: {
    yAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        suggestedMin: 60,
        suggestedMax: 125,
        padding: 20,
        fontColor: '#9e9e9e'
      }
    }],
    xAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.1)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        padding: 20,
        fontColor: '#9e9e9e'
      }
    }]
  }
});
var barChartOptionsGradient = _objectSpread({}, basicOptions, {
  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: 'nearest',
    intersect: 0,
    position: 'nearest'
  },
  responsive: true,
  scales: {
    yAxes: [{
      gridLines: {
        drawBorder: false,
        color: 'rgba(253,93,147,0.1)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        suggestedMin: 60,
        suggestedMax: 125,
        padding: 20,
        fontColor: '#9e9e9e'
      }
    }],
    xAxes: [{
      gridLines: {
        drawBorder: false,
        color: 'rgba(253,93,147,0.1)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        padding: 20,
        fontColor: '#9e9e9e'
      }
    }]
  }
});
var pieChartOptions = _objectSpread({}, basicOptions, {
  cutoutPercentage: 70,
  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: 'nearest',
    intersect: 0,
    position: 'nearest'
  },
  scales: {
    yAxes: [{
      display: 0,
      ticks: {
        display: false
      },
      gridLines: {
        drawBorder: false,
        zeroLineColor: 'transparent',
        color: 'rgba(255,255,255,0.05)'
      }
    }],
    xAxes: [{
      display: 0,
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(255,255,255,0.1)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        display: false
      }
    }]
  }
});
var purpleChartOptions = _objectSpread({}, basicOptions, {
  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: 'nearest',
    intersect: 0,
    position: 'nearest'
  },
  scales: {
    yAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        suggestedMin: 60,
        suggestedMax: 125,
        padding: 20,
        fontColor: '#9a9a9a'
      }
    }],
    xAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(225,78,202,0.1)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        padding: 20,
        fontColor: '#9a9a9a'
      }
    }]
  }
});
var orangeChartOptions = _objectSpread({}, basicOptions, {
  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: 'nearest',
    intersect: 0,
    position: 'nearest'
  },
  scales: {
    yAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        suggestedMin: 50,
        suggestedMax: 110,
        padding: 20,
        fontColor: '#ff8a76'
      }
    }],
    xAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(220,53,69,0.1)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        padding: 20,
        fontColor: '#ff8a76'
      }
    }]
  }
});
var greenChartOptions = _objectSpread({}, basicOptions, {
  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: 'nearest',
    intersect: 0,
    position: 'nearest'
  },
  scales: {
    yAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        suggestedMin: 50,
        suggestedMax: 125,
        padding: 20,
        fontColor: '#9e9e9e'
      }
    }],
    xAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: 'rgba(0,242,195,0.1)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        padding: 20,
        fontColor: '#9e9e9e'
      }
    }]
  }
});
var barChartOptions = _objectSpread({}, basicOptions, {
  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: 'nearest',
    intersect: 0,
    position: 'nearest'
  },
  scales: {
    yAxes: [{
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.1)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        suggestedMin: 60,
        suggestedMax: 120,
        padding: 20,
        fontColor: '#9e9e9e'
      }
    }],
    xAxes: [{
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.1)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        padding: 20,
        fontColor: '#9e9e9e'
      }
    }]
  }
});

/***/ }),

/***/ "./resources/js/components/Charts/globalOptionsMixin.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/Charts/globalOptionsMixin.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_components_Charts_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/components/Charts/config */ "./resources/js/components/Charts/config.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    Object(_js_components_Charts_config__WEBPACK_IMPORTED_MODULE_1__["initGlobalOptions"])(chart_js__WEBPACK_IMPORTED_MODULE_0___default.a);
  }
});

/***/ }),

/***/ "./resources/js/components/Charts/optionHelpers.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Charts/optionHelpers.js ***!
  \*********************************************************/
/*! exports provided: parseOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseOptions", function() { return parseOptions; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Parse global options
function parseOptions(parent, options) {
  for (var item in options) {
    if (_typeof(options[item]) !== 'object') {
      parent[item] = options[item];
    } else {
      parseOptions(parent[item], options[item]);
    }
  }
}

/***/ }),

/***/ "./resources/js/views/Icons.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Icons.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icons_vue_vue_type_template_id_279a5c8b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icons.vue?vue&type=template&id=279a5c8b& */ "./resources/js/views/Icons.vue?vue&type=template&id=279a5c8b&");
/* harmony import */ var _Icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icons.vue?vue&type=script&lang=js& */ "./resources/js/views/Icons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Icons_vue_vue_type_template_id_279a5c8b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Icons_vue_vue_type_template_id_279a5c8b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Icons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Icons.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Icons.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Icons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Icons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Icons.vue?vue&type=template&id=279a5c8b&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Icons.vue?vue&type=template&id=279a5c8b& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_template_id_279a5c8b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Icons.vue?vue&type=template&id=279a5c8b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Icons.vue?vue&type=template&id=279a5c8b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_template_id_279a5c8b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_template_id_279a5c8b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/UserProfile.vue":
/*!********************************************!*\
  !*** ./resources/js/views/UserProfile.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserProfile_vue_vue_type_template_id_19ecac0f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=template&id=19ecac0f& */ "./resources/js/views/UserProfile.vue?vue&type=template&id=19ecac0f&");
/* harmony import */ var _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=script&lang=js& */ "./resources/js/views/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserProfile_vue_vue_type_template_id_19ecac0f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserProfile_vue_vue_type_template_id_19ecac0f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/UserProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/UserProfile.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/UserProfile.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/UserProfile.vue?vue&type=template&id=19ecac0f&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/UserProfile.vue?vue&type=template&id=19ecac0f& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_19ecac0f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=template&id=19ecac0f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserProfile.vue?vue&type=template&id=19ecac0f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_19ecac0f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_19ecac0f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);