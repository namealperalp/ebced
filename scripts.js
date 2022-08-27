// Create a Map

'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
});


const degerTablosu=new Map(
  [
                ["ا"  ,1 ] ,
                ["ب",2],
                ["پ",2],
                ["ت",400] ,     
                ["ج",3],
                ["د",4],
                ["ه",5],
                ["و",6],
                ["ز",7],
                ["ح",8],
                ["ط",9],
                ["ي",10],
                ["ك",20],
                ["ل",30],
                ["م",40],
                ["ن",50],
                ["س",60],
                ["ع",70],
                ["ف",80],
                ["ص",90],
                ["ق",100],
                ["ر",200],
                ["ش",300],
                ["ث",500],
                ["خ",600],
                ["ذ",700],
                ["ض",800],
                ["ظ",900],
                ["غ",1000],
                ["چ",3],
                ["ژ",7],
                ["ک",100],
                ["گ",100],
                [" ",0],             
                ["ی",10] ,
                ["ئ",1],
                ["ي",10],
              ]);


              

  function hesap(){
    var mText=document.getElementById("minput").value;
    //alert(mText);
    var sum=0;
    var myArray =mText.split("");
   
   for (var i=0;i<myArray.length;i++){
    
    if(degerTablosu.has(myArray[i])){
      sum +=degerTablosu.get((myArray[i]))
    }else{
      alert(myArray[i]+" Tanımlanmamış")
    }
      
      
  
    
  }

  document.getElementById("sonuc").innerHTML="Ebced değeri= "+sum;


  }

 
  
