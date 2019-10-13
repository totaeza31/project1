
   //initial firebase
   var firebaseConfig = {
    apiKey: "AIzaSyCKq4RohgjtKq85_nuEFW0t9esnv0jOhF4",
    authDomain: "fastfood-d742f.firebaseapp.com",
    databaseURL: "https://fastfood-d742f.firebaseio.com",
    projectId: "fastfood-d742f",
    storageBucket: "fastfood-d742f.appspot.com",
    messagingSenderId: "959087323418",
    appId: "1:959087323418:web:c926ea3dd9d34a2f64a4a3"
   };
   firebase.initializeApp(firebaseConfig);

   var db = firebase.firestore();


// ดูสถานะการ login


document.addEventListener('init', function (event) {
  var page = event.target;
 



//   if (page.id === 'homePage') {

//     $("#menubtn").click(function () {
//       $("#sidemenu")[0].open();      
//     });

//     $("#carousel").empty();
//     db.collection("recommended").get().then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
          
//         var item = `
//         <ons-carousel-item modifier="nodivider" id="${doc.data().id}" class="recomended_item">
//             <div class="thumbnail" style="background-image: url('${doc.data().photoUrl}')">
//             </div>
//             <div class="recomended_item_title" id="item1_name">${doc.data().name}</div>
//         </ons-carousel-item>`

//         $("#carousel").append(item);


//       });
//     });

//   }





    if (page.id === "tabbar") {
        //Code for tabbar
        $("#menubtn").click(function () {
            var menu = document.getElementById('menu');
            menu.open();
        });

        $("#signinbtn").click(function () {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            if (username === 'a' && password === '123') {
                ons.notification.alert('Welcone Mockfood');
                content.load('tabbar.html')
                    .then(menu.close.bind(menu));

            } else {
                ons.notification.alert('username=a and password=123');
            }
        });

        $("#backbtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html')
                .then(menu.close.bind(menu));
        });

        $("#regisbtn1").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('regis.html')
                .then(menu.close.bind(menu));
        });

        $("#fbtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html')
                .then(menu.close.bind(menu));
        });
        $("#gbtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html')
                .then(menu.close.bind(menu));
        });



    }

    if (page.id === "tab1") {
       
       
        db.collection("recommended").get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              
            var item = `
            <ons-carousel-item modifier="nodivider" id="${doc.data().id}" class="recomended_items">
                <div class="thumbnail" style="background-image: url('${doc.data().photoUrl}')">
                </div>
                <div class="recomended_item_title" id="item1_name">${doc.data().name}</div>
            </ons-carousel-item>`
    
            $("#carousel").append(item);
    
    
          });
        });

        db.collection("recommended").get().then((querySnapshot1) => {
            querySnapshot1.forEach((doc) => {
                
              var item1 = `
              <ons-carousel-item modifier="nodivider" id="${doc.data().id}" class="recomended_item">
                  <div class="thumbnail" style="background-image: url('${doc.data().photoUrl}')">
                  </div>
                  <div class="recomended_item_title" id="item1_name">${doc.data().name}</div>
              </ons-carousel-item>`
      
              $("#carousels").append(item1);
      
      
            });
          });
  
    
      }


      if (page.id === 'homePage') {
        console.log("homePage");

    
        $("#carousel").empty();
        db.collection("recommended").get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              
            var item = `
            <ons-carousel-item modifier="nodivider" id="${doc.data().id}" class="recomended_item">
                <div class="thumbnail" style="background-image: url('${doc.data().photoUrl}')">
                </div>
                <div class="recomended_item_title" id="item1_name">${doc.data().name}</div>
            </ons-carousel-item>`
    
            $("#carousel").append(item);
    
    
          });
        });
    
      }
    

    if (page.id === "tab2") {

        $("#rest1").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('rest1.html')
                .then(menu.close.bind(menu));
        });
        $("#rest2").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('rest1.html')
                .then(menu.close.bind(menu));
        });
        $("#rest3").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('rest1.html')
                .then(menu.close.bind(menu));
        });
        $("#rest4").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('rest1.html')
                .then(menu.close.bind(menu));
        });
        $("#rest5").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('rest1.html')
                .then(menu.close.bind(menu));
        });
    }


    if (page.id === "resturant") {
        $("#homebtn1").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html')
                .then(menu.close.bind(menu));
        });
        $("#backbtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html')
                .then(menu.close.bind(menu));
        });
 
        $("#mainmenu").click(function () {
            var content = document.getElementById('content');
            content.load('rest1.html');
        });

         $("#noodlemenu").click(function () {
            var content = document.getElementById('content');
            content.load('rest11.html');
        });

        $("#orderrest1").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('busket.html')
                .then(menu.close.bind(menu));
        });
        $("#orderrest2").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('busket.html')
                .then(menu.close.bind(menu));
        });
        $("#orderrest3").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('busket.html')
                .then(menu.close.bind(menu));
        });
        $("#orderrest4").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('busket.html')
                .then(menu.close.bind(menu));
        });
        $("#orderrest5").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('busket.html')
                .then(menu.close.bind(menu));
        });

    }

    if (page.id === "busket") {
        //Code for sidemenu
        $("#agianbtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('rest1.html')
                .then(menu.close.bind(menu));
        });

       $("#backbtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('rest1.html')
                .then(menu.close.bind(menu));
        });
        $("#homebtn1").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html')
                .then(menu.close.bind(menu));
        });


        $("#paybtn").click(function () {
            ons.notification.alert('thank you');
        });
        $("#rbtn").click(function () {
            ons.notification.alert('thank you');
        });

        
    }

    

    if (page.id === "sidemenu") {
        //Code for sidemenu
        $("#homebtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html')
                .then(menu.close.bind(menu));
        });
        $("#loginbtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('login.html')
                .then(menu.close.bind(menu));
        });
        $("#regisbtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('regis.html')
                .then(menu.close.bind(menu));
        });
        $("#basbtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('busket.html')
                .then(menu.close.bind(menu));
        });
    }

    










});
