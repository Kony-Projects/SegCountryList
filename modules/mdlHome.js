//Type your code here
var count = 0;
function play(){



  frmLogin.Segment0a8b974d5d59c46.onSwipe = playdele;

  var sectionIndex = frmLogin.Segment0a8b974d5d59c46.selectedRowIndex[0];
  var rowIndex = frmLogin.Segment0a8b974d5d59c46.selectedRowIndex[1]+1;
  alert("rowIndex"+rowIndex);
  alert("sectionIndex"+sectionIndex);
  var data ={
    lbltxt : "text"+rowIndex
  };



  animation= kony.anim.FILL_MODE_BACKWARDS;

  frmLogin.Segment0a8b974d5d59c46.addDataAt(data, rowIndex, sectionIndex,animation);
  //Defining the context Object
  // var context1={"widget":frmHome.Button1,"anchor":"left","sizetoanchorwidth":false};       

  // //setContext method call
  // Popup0ha12702b45354e.setContext(context1);
  //   Popup0ha12702b45354e.show();

}

function playdele(){





  var sectionIndex = frmLogin.Segment0a8b974d5d59c46.selectedRowIndex[0];
  var rowIndex = frmLogin.Segment0a8b974d5d59c46.selectedRowIndex[1];
  alert("rowIndex"+rowIndex);
  alert("sectionIndex"+sectionIndex);
  var data =[{
    lbltxt : "text"+rowIndex
  },
             {
               lbltxt : "text"+rowIndex
             },
             {
               lbltxt : "text"+rowIndex
             }];



  animation= kony.anim.FILL_MODE_BACKWARDS;

  frmLogin.Segment0a8b974d5d59c46.addAll(data);

  //Defining the context Object
  // var context1={"widget":frmHome.Button1,"anchor":"left","sizetoanchorwidth":false};       

  // //setContext method call
  // Popup0ha12702b45354e.setContext(context1);
  //   Popup0ha12702b45354e.show();

}

function onPushSeg(){
  alert("Push");
}

//code used in demo

function onreachSegEnd(){
  try{

    kony.application.showLoadingScreen("loadskin","",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, false,true,null);
    var len = frmAddSeg.segAdd.data.length;
    var tempArray = [];
    var i;

    if(countrylistMasterdata.length-10 > len){
      for(i=len;i<len+10;i++){
        tempArray.push(countrylistMasterdata[i]); 
      }
    }
    else{
      for(i=len;i<countrylistMasterdata.length;i++){
        tempArray.push(countrylistMasterdata[i]);  
      }
    }

    animation= kony.anim.FILL_MODE_BACKWARDS;

    //frmAddSeg.segAdd.addDataAt(data, len, 0,animation);
    frmAddSeg.segAdd.addAll(tempArray);
    kony.application.dismissLoadingScreen();

  }catch(err){
    alert("Err "+err);

  }


}

//END

function setcountrylistMasterdata()
{

  countrylistMasterdata = [{
    lblCountryList: "Abkhazia",
    imgCountryList: "abkhazia.png",
    imgCountryListSelected: ""
  },
                           {
                             lblCountryList: "Afghanistan",
                             imgCountryList: "afghanistan.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Alandislands",
                             imgCountryList: "alandislands.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Albania",
                             imgCountryList: "albania.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Algeria",
                             imgCountryList: "algeria.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Americansamoa",
                             imgCountryList: "americansamoa.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Andorra",
                             imgCountryList: "andorra.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Angola",
                             imgCountryList: "angola.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Anguilla",
                             imgCountryList: "anguilla.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Antiguaandbarbuda",
                             imgCountryList: "antiguaandbarbuda.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Argentina",
                             imgCountryList: "argentina.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Armenia",
                             imgCountryList: "armenia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Aruba",
                             imgCountryList: "aruba.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Australia",
                             imgCountryList: "australia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Austria",
                             imgCountryList: "austria.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Azerbaijan",
                             imgCountryList: "azerbaijan.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Azoresislands",
                             imgCountryList: "azoresislands.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Bahamas",
                             imgCountryList: "bahamas.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Bahrain",
                             imgCountryList: "bahrain.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Balearicislands",
                             imgCountryList: "balearicislands.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Bangladesh",
                             imgCountryList: "bangladesh.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Barbados",
                             imgCountryList: "barbados.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Basquecountry",
                             imgCountryList: "basquecountry.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Belarus",
                             imgCountryList: "belarus.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Belgium",
                             imgCountryList: "belgium.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Belize",
                             imgCountryList: "belize.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Benin",
                             imgCountryList: "benin.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Bermuda",
                             imgCountryList: "bermuda.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Bhutan1",
                             imgCountryList: "bhutan1.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Bhutan",
                             imgCountryList: "bhutan.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Bolivia",
                             imgCountryList: "bolivia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Bonaire",
                             imgCountryList: "bonaire.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Bosniaandherzegovina",
                             imgCountryList: "bosniaandherzegovina.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Botswana",
                             imgCountryList: "botswana.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Brazil",
                             imgCountryList: "brazil.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Britishcolumbia",
                             imgCountryList: "britishcolumbia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Britishindianoceanterritory",
                             imgCountryList: "britishindianoceanterritory.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Britishvirginislands",
                             imgCountryList: "britishvirginislands.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Brunei",
                             imgCountryList: "brunei.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Bulgaria",
                             imgCountryList: "bulgaria.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Burkinafaso",
                             imgCountryList: "burkinafaso.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Burundi",
                             imgCountryList: "burundi.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Cambodia",
                             imgCountryList: "cambodia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Cameroon",
                             imgCountryList: "cameroon.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Canada",
                             imgCountryList: "canada.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Canaryislands",
                             imgCountryList: "canaryislands.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Capeverde",
                             imgCountryList: "capeverde.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Caymanislands",
                             imgCountryList: "caymanislands.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Centralafricanrepublic",
                             imgCountryList: "centralafricanrepublic.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Ceuta",
                             imgCountryList: "ceuta.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Chad",
                             imgCountryList: "chad.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Chile",
                             imgCountryList: "chile.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "China",
                             imgCountryList: "china.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Christmasisland",
                             imgCountryList: "christmasisland.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Cocosisland",
                             imgCountryList: "cocosisland.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Colombia",
                             imgCountryList: "colombia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Comoros",
                             imgCountryList: "comoros.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Cookislands",
                             imgCountryList: "cookislands.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Corsica",
                             imgCountryList: "corsica.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Costarica",
                             imgCountryList: "costarica.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Croatia",
                             imgCountryList: "croatia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Cuba",
                             imgCountryList: "cuba.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Curacao",
                             imgCountryList: "curacao.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Cyprus",
                             imgCountryList: "cyprus.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Czechrepublic",
                             imgCountryList: "czechrepublic.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Democraticrepublicofcongo",
                             imgCountryList: "democraticrepublicofcongo.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Denmark",
                             imgCountryList: "denmark.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Djibouti",
                             imgCountryList: "djibouti.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Dominica",
                             imgCountryList: "dominica.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Dominicanrepublic",
                             imgCountryList: "dominicanrepublic.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Easttimor",
                             imgCountryList: "easttimor.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Ecuador",
                             imgCountryList: "ecuador.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Egypt",
                             imgCountryList: "egypt.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "England",
                             imgCountryList: "england.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Equatorialguinea",
                             imgCountryList: "equatorialguinea.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Eritrea",
                             imgCountryList: "eritrea.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Estonia",
                             imgCountryList: "estonia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Ethiopia",
                             imgCountryList: "ethiopia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Europeanunion",
                             imgCountryList: "europeanunion.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Falklandislands",
                             imgCountryList: "falklandislands.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Faroeislands",
                             imgCountryList: "faroeislands.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Fiji",
                             imgCountryList: "fiji.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Finland",
                             imgCountryList: "finland.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "France",
                             imgCountryList: "france.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Frenchpolynesia",
                             imgCountryList: "frenchpolynesia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Gabon",
                             imgCountryList: "gabon.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Galapagosislands",
                             imgCountryList: "galapagosislands.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Gambia",
                             imgCountryList: "gambia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Georgia",
                             imgCountryList: "georgia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Germany",
                             imgCountryList: "germany.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Ghana",
                             imgCountryList: "ghana.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Gibraltar",
                             imgCountryList: "gibraltar.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Greece",
                             imgCountryList: "greece.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Greenland",
                             imgCountryList: "greenland.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Grenada",
                             imgCountryList: "grenada.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Guam",
                             imgCountryList: "guam.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Guatemala",
                             imgCountryList: "guatemala.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Guernsey",
                             imgCountryList: "guernsey.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Guineabissau",
                             imgCountryList: "guineabissau.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Guinea",
                             imgCountryList: "guinea.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Guyana",
                             imgCountryList: "guyana.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Haiti",
                             imgCountryList: "haiti.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Hawaii",
                             imgCountryList: "hawaii.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Honduras",
                             imgCountryList: "honduras.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Hongkong",
                             imgCountryList: "hongkong.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Hungary",
                             imgCountryList: "hungary.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Iceland",
                             imgCountryList: "iceland.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "India",
                             imgCountryList: "india.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Indonesia",
                             imgCountryList: "indonesia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Iran",
                             imgCountryList: "iran.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Iraq",
                             imgCountryList: "iraq.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Ireland",
                             imgCountryList: "ireland.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Isleofman",
                             imgCountryList: "isleofman.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Israel",
                             imgCountryList: "israel.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Italy",
                             imgCountryList: "italy.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Ivorycoast",
                             imgCountryList: "ivorycoast.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Jamaica",
                             imgCountryList: "jamaica.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Japan",
                             imgCountryList: "japan.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Jersey",
                             imgCountryList: "jersey.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Jordan",
                             imgCountryList: "jordan.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Kazakhstan",
                             imgCountryList: "kazakhstan.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Kenya",
                             imgCountryList: "kenya.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Kiribati",
                             imgCountryList: "kiribati.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Kosovo",
                             imgCountryList: "kosovo.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Kuwait",
                             imgCountryList: "kuwait.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Kyrgyzstan",
                             imgCountryList: "kyrgyzstan.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Laos",
                             imgCountryList: "laos.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Latvia",
                             imgCountryList: "latvia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Lebanon",
                             imgCountryList: "lebanon.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Lesotho",
                             imgCountryList: "lesotho.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Liberia",
                             imgCountryList: "liberia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Libya",
                             imgCountryList: "libya.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Liechtenstein",
                             imgCountryList: "liechtenstein.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Lithuania",
                             imgCountryList: "lithuania.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Luxembourg",
                             imgCountryList: "luxembourg.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Macao",
                             imgCountryList: "macao.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Madagascar",
                             imgCountryList: "madagascar.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Madeira",
                             imgCountryList: "madeira.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Malawi",
                             imgCountryList: "malawi.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Malaysia",
                             imgCountryList: "malaysia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Maldives",
                             imgCountryList: "maldives.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Mali",
                             imgCountryList: "mali.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Malta",
                             imgCountryList: "malta.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Marshallisland",
                             imgCountryList: "marshallisland.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Martinique",
                             imgCountryList: "martinique.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Mauritania",
                             imgCountryList: "mauritania.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Mauritius",
                             imgCountryList: "mauritius.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Melilla",
                             imgCountryList: "melilla.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Mexico",
                             imgCountryList: "mexico.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Micronesia",
                             imgCountryList: "micronesia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Moldova",
                             imgCountryList: "moldova.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Monaco",
                             imgCountryList: "monaco.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Mongolia",
                             imgCountryList: "mongolia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Montenegro",
                             imgCountryList: "montenegro.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Montserrat",
                             imgCountryList: "montserrat.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Morocco",
                             imgCountryList: "morocco.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Mozambique",
                             imgCountryList: "mozambique.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Myanmar",
                             imgCountryList: "myanmar.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Namibia",
                             imgCountryList: "namibia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Nato",
                             imgCountryList: "nato.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Nauru",
                             imgCountryList: "nauru.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Nepal",
                             imgCountryList: "nepal.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Netherlands",
                             imgCountryList: "netherlands.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Newzealand",
                             imgCountryList: "newzealand.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Nicaragua",
                             imgCountryList: "nicaragua.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Niger",
                             imgCountryList: "niger.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Nigeria",
                             imgCountryList: "nigeria.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Niue",
                             imgCountryList: "niue.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Norfolkisland",
                             imgCountryList: "norfolkisland.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Northkorea",
                             imgCountryList: "northkorea.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Northencyprus",
                             imgCountryList: "northencyprus.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Northernmarianasislands",
                             imgCountryList: "northernmarianasislands.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Norway",
                             imgCountryList: "norway.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Oman",
                             imgCountryList: "oman.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Orkneyislands",
                             imgCountryList: "orkneyislands.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Ossetia",
                             imgCountryList: "ossetia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Pakistan",
                             imgCountryList: "pakistan.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Palau",
                             imgCountryList: "palau.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Palestine",
                             imgCountryList: "palestine.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Panama",
                             imgCountryList: "panama.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Papuanewguinea",
                             imgCountryList: "papuanewguinea.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Paraguay",
                             imgCountryList: "paraguay.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Peru",
                             imgCountryList: "peru.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Philippines",
                             imgCountryList: "philippines.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Pitcairnislands",
                             imgCountryList: "pitcairnislands.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Portugal",
                             imgCountryList: "portugal.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Puertorico",
                             imgCountryList: "puertorico.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Qatar",
                             imgCountryList: "qatar.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Rapanui",
                             imgCountryList: "rapanui.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Republicofmacedonia",
                             imgCountryList: "republicofmacedonia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Republicofpoland",
                             imgCountryList: "republicofpoland.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Republicofthecongo",
                             imgCountryList: "republicofthecongo.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Romania",
                             imgCountryList: "romania.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Russia",
                             imgCountryList: "russia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Rwanda",
                             imgCountryList: "rwanda.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Sabaisland",
                             imgCountryList: "sabaisland.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Saintkittsandnevis",
                             imgCountryList: "saintkittsandnevis.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Salvador",
                             imgCountryList: "salvador.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Samoa",
                             imgCountryList: "samoa.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Sanmarino",
                             imgCountryList: "sanmarino.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Saotomeandprincipe",
                             imgCountryList: "saotomeandprincipe.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Sardinia",
                             imgCountryList: "sardinia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Saudiarabia",
                             imgCountryList: "saudiarabia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Scotland",
                             imgCountryList: "scotland.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Senegal",
                             imgCountryList: "senegal.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Serbia",
                             imgCountryList: "serbia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Seychelles",
                             imgCountryList: "seychelles.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Sierraleone",
                             imgCountryList: "sierraleone.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Singapore",
                             imgCountryList: "singapore.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Sinteustatius",
                             imgCountryList: "sinteustatius.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Sintmaarten",
                             imgCountryList: "sintmaarten.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Slovakia",
                             imgCountryList: "slovakia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Slovenia",
                             imgCountryList: "slovenia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Solomonislands",
                             imgCountryList: "solomonislands.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Somalia",
                             imgCountryList: "somalia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Somaliland",
                             imgCountryList: "somaliland.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Southafrica",
                             imgCountryList: "southafrica.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Southkorea",
                             imgCountryList: "southkorea.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Southsudan",
                             imgCountryList: "southsudan.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Spain",
                             imgCountryList: "spain.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Srilanka",
                             imgCountryList: "srilanka.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Stbarts",
                             imgCountryList: "stbarts.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Stlucia",
                             imgCountryList: "stlucia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Stvincentandthegrenadines",
                             imgCountryList: "stvincentandthegrenadines.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Sudan",
                             imgCountryList: "sudan.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Suriname",
                             imgCountryList: "suriname.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Swaziland",
                             imgCountryList: "swaziland.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Sweden",
                             imgCountryList: "sweden.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Switzerland",
                             imgCountryList: "switzerland.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Syria",
                             imgCountryList: "syria.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Taiwan",
                             imgCountryList: "taiwan.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Tajikistan",
                             imgCountryList: "tajikistan.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Tanzania",
                             imgCountryList: "tanzania.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Thailand",
                             imgCountryList: "thailand.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Tibet",
                             imgCountryList: "tibet.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Togo",
                             imgCountryList: "togo.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Tokelau",
                             imgCountryList: "tokelau.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Tonga",
                             imgCountryList: "tonga.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Transnistria",
                             imgCountryList: "transnistria.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Trinidadandtobago",
                             imgCountryList: "trinidadandtobago.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Tunisia",
                             imgCountryList: "tunisia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Turkey",
                             imgCountryList: "turkey.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Turkmenistan",
                             imgCountryList: "turkmenistan.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Turksandcaicos",
                             imgCountryList: "turksandcaicos.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Tuvalu",
                             imgCountryList: "tuvalu.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Uganda",
                             imgCountryList: "uganda.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Ukraine",
                             imgCountryList: "ukraine.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Unitedarabemirates",
                             imgCountryList: "unitedarabemirates.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Unitedkingdom",
                             imgCountryList: "unitedkingdom.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Unitednations",
                             imgCountryList: "unitednations.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Unitedstatesofamerica",
                             imgCountryList: "unitedstatesofamerica.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Uruguay",
                             imgCountryList: "uruguay.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Uzbekistn",
                             imgCountryList: "uzbekistn.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Vanuatu",
                             imgCountryList: "vanuatu.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Vaticancity",
                             imgCountryList: "vaticancity.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Venezuela",
                             imgCountryList: "venezuela.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Vietnam",
                             imgCountryList: "vietnam.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Virginislands",
                             imgCountryList: "virginislands.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Wales",
                             imgCountryList: "wales.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Westernsahara",
                             imgCountryList: "westernsahara.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Yemen",
                             imgCountryList: "yemen.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Zambia",
                             imgCountryList: "zambia.png",
                             imgCountryListSelected: ""
                           },
                           {
                             lblCountryList: "Zimbabwe",
                             imgCountryList: "zimbabwe.png",
                             imgCountryListSelected: ""
                           }
                          ];


  var tempArray = [];
  var i;

  for(i=0;i<20;i++){
    tempArray.push(countrylistMasterdata[i]);  
  }
  alert(tempArray.length);

  frmAddSeg.segAdd.setData(tempArray);
}
