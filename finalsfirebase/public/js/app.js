


var firebaseConfig = {
    apiKey: "AIzaSyDE0ldLjuWiAYtcbl3G9kKalNOwxeFw3yg",
    authDomain: "food-e0c82.firebaseapp.com",
    databaseURL: "https://food-e0c82.firebaseio.com",
    projectId: "food-e0c82",
    storageBucket: "food-e0c82.appspot.com",
    messagingSenderId: "909826880316",
    appId: "1:909826880316:web:bc7974ce3d92b90c63a439"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
// ดูสถานะการ login


document.addEventListener('init', function (event) {
    var page = event.target;

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            var email = user.email;
            console.log(email + "signed in");

        } else {
            console.log("sign out");

        }
    });

    if (page.id === 'loginPage') {

        console.log("loginPage");

        $("#backbtn").click(function () {

            content.load('login.html')
                .then(menu.close.bind(menu));
        });

        $("#signupbtn").click(function () {
            var username = $("#username1").val();
            var password = $("#password1").val();
            firebase.auth().createUserWithEmailAndPassword(username, password)
                .then(function (result) {
                    console.log(result);
                    ons.notification.alert("Regis Complete!!!");
                    content.load('login.html')
                        .then(menu.close.bind(menu));

                }).catch(function (error) {
                    console.log(error.message);
                    ons.notification.alert(error.message);
                });

        })

        $("#gmailbtn").click(function () {

            var provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider).then(function (result) {

                content.load('tabbar.html')
                    .then(menu.close.bind(menu));


            }).catch(function (error) {
                console.log(error);
            });

        })

        $("#signinbtn").click(function () {
            var username = $("#username").val();
            var password = $("#password").val();
            firebase.auth().signInWithEmailAndPassword(username, password)
                .then(function (result) {
                    console.log(result);
                    ons.notification.alert("LOGIN Complete!!!");
                    content.load('tabbar.html')
                        .then(menu.close.bind(menu));

                }).catch(function (error) {
                    console.log(error.message);
                    ons.notification.alert(error.message);
                });

        })
        $("#regisbtn1").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('regis.html')
                .then(menu.close.bind(menu));
        });

        $("#backhomebtn").click(function () {
            $("#content")[0].load("home.html");
        });
    }

    if (page.id === "tabbar") {
        //Code for tabbar
        $("#menubtn").click(function () {
            var menu = document.getElementById('menu');
            menu.open();
        });

        $("#backbtn").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('tabbar.html')
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

    if (page.id === "tab3") {

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

        db.collection("fontcategory").get().then((querySnapshot1) => {
            querySnapshot1.forEach((doc) => {

                var item5 = `
                <button class="button--quiet" width="100%" id="${doc.data().id}">
                    <li class="list-item">
                        <div class="list-item__left" >
                            <img width="130px"height="80px" 
                            style="background-image: url('${doc.data().photoUrl}') ;  background-size: cover;">
                        </div>
                        <div class="list-item__center">
                            <div class="list-item__title">${doc.data().name}</div>
                            <div class="list-item__subtitle">${doc.data().category}</div>
                            <div class="list-item__subtitle">
                                <i class="zmdi zmdi-star" style="color:yellow"></i> ${doc.data().star}
                                <i class="zmdi zmdi-pin"></i>
                                ${doc.data().lo}</div>
                        </div>
                    </li>
            </button> 
              `
                $("#carousel5").append(item5)
            });
            $("#carousel5").click(function () {
                content.load('rest1.html')
                    .then(menu.close.bind(menu));
            });
        });
    }

    if (page.id === "tab1") {

        db.collection("recommended").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                var item = `
            <ons-carousel-item modifier="nodivider" id="${doc.data().id}" class="recomended_items">
            <ons-button modifier="quiet">
                <div class="thumbnail" style="background-image: url('${doc.data().photoUrl}')">
                </div>
                <div class="recomended_item_title" id="item1_name">${doc.data().name}</div>
                </ons-button>
            </ons-carousel-item>`

                $("#carousel").append(item);
            });

            $("#carousel").click(function () {
                content.load('rest1.html')
                    .then(menu.close.bind(menu));
            });

        });

        db.collection("fastdelivery").get().then((querySnapshot1) => {
            querySnapshot1.forEach((doc) => {

                var item3 = `
              <ons-carousel-item modifier="nodivider" id="${doc.data().id}" class="recomended_item">
              <ons-button modifier="quiet">
                  <div class="thumbnailss" style="background-image: url('${doc.data().photoUrl}') ;width="200px">
                  </div>
                  <div class="recomended_item_title" id="item1_name">${doc.data().name}</div>
                  </ons-button>
              </ons-carousel-item>`

                $("#carousel2").append(item3);
            });
            $("#carousel2").click(function () {
                content.load('rest1.html')
                    .then(menu.close.bind(menu));
            });
        });

        db.collection("promotionOnefreeOne").get().then((querySnapshot1) => {
            querySnapshot1.forEach((doc) => {

                var item1 = `
              <ons-carousel-item modifier="nodivider" id="${doc.data().id}" class="recomended_item">
              <ons-button modifier="quiet">
                  <div class="thumbnails" style="background-image: url('${doc.data().photoUrl}') ;width="200px">
                  </div>
                  <div class="recomended_item_title" id="item1_name">${doc.data().name}</div>
                  </ons-button>
              </ons-carousel-item>`
                $("#carousels").append(item1);
            });

            $("#carousels").click(function () {
                content.load('rest1.html')
                    .then(menu.close.bind(menu));
            });
        });

    }

    if (page.id === "tab2") {

        $("#rest1").click(function () {
        
            content.load('resturent.html')
                .then(menu.close.bind(menu));
        });
        $("#rest2").click(function () {
           
            content.load('resturent.html')
                .then(menu.close.bind(menu));
        });
        $("#rest3").click(function () {
         
            content.load('resturent.html')
                .then(menu.close.bind(menu));
        });
        $("#rest4").click(function () {
          
            content.load('resturent.html')
                .then(menu.close.bind(menu));
        });
        $("#rest5").click(function () {
           
            content.load('resturent.html')
                .then(menu.close.bind(menu));
        });
        $("#rest6").click(function () {
           
            content.load('resturent.html')
                .then(menu.close.bind(menu));
        });

    }

    if (page.id === "resturant") {
    
        db.collection("itemrest1").get().then((querySnapshot1) => {
            querySnapshot1.forEach((doc) => {

                var item1 = `

               <button class="button--quiet" width="100%" id="${doc.data().id}">
                <ul class="list ">
                    <li class="list-item">
                        <div class="list-item__left">
        
                        </div>
                        <div class="list-item__center">
                            <div class="list-item__title">${doc.data().name}</div>
                            <div class="list-item__subtitle">${doc.data().price} Bath</div>
                            <div class="list-item__subtitle"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                            </div>
                        </div>
                        <div class="list-item__right list-item--material__right">
                            &nbsp; &nbsp; &nbsp; &nbsp;
                        </div>
                        <div class="list-item__right list-item--material__right">
                            <i class="zmdi zmdi-plus-square zmdi-hc-3x" style="color:orange"></i>
                        </div>
                    </li>
                </ul>
            </button>        
              `
                $("#carousel7").append(item1);
            });
            $("#carousel7").click(function () {
                content.load('busket.html')
                    .then(menu.close.bind(menu));
            });
        });

        db.collection("itemrest11").get().then((querySnapshot1) => {
            querySnapshot1.forEach((doc) => {

                var item1 = `

               <button class="button--quiet" width="100%" id="${doc.data().id}">
                <ul class="list ">
                    <li class="list-item">
                        <div class="list-item__left">
        
                        </div>
                        <div class="list-item__center">
                            <div class="list-item__title">${doc.data().name}</div>
                            <div class="list-item__subtitle">${doc.data().price} Bath</div>
                            <div class="list-item__subtitle"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                            </div>
                        </div>
                        <div class="list-item__right list-item--material__right">
                            &nbsp; &nbsp; &nbsp; &nbsp;
                        </div>
                        <div class="list-item__right list-item--material__right">
                            <i class="zmdi zmdi-plus-square zmdi-hc-3x" style="color:orange"></i>
                        </div>
                    </li>
                </ul>
            </button>
              
              `
                $("#carousel8").append(item1);
            });

            $("#carousel8").click(function () {
                content.load('busket.html')
                    .then(menu.close.bind(menu));
            });
        });

        $("#homebtn1").click(function () {
          
            content.load('tabbar.html')
                .then(menu.close.bind(menu));
        });
        $("#backbtn").click(function () {
          
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

    }

    if (page.id === "busket") {

        $("#agianbtn").click(function () {
          
            content.load('rest1.html')
                .then(menu.close.bind(menu));
        });

        $("#backbtn").click(function () {
          
            content.load('rest1.html')
                .then(menu.close.bind(menu));
        });
        $("#homebtn1").click(function () {
          
            content.load('tabbar.html')
                .then(menu.close.bind(menu));
        });


        $("#paybtn").click(function () {
            ons.notification.alert('ชำระเงินสำเร็จ');
            content.load('tabbar.html')
                .then(menu.close.bind(menu));
        });
        $("#rbtn").click(function () {
            ons.notification.alert('กรุณารอรับอาหาร');
            content.load('tabbar.html')
                .then(menu.close.bind(menu));
        });
    }

    if (page.id === "sidemenu") {
        //Code for sidemenu
        $("#homebtn").click(function () {
            
            content.load('tabbar.html')
                .then(menu.close.bind(menu));
        });
        $("#loginbtn").click(function () {
           
            content.load('login.html')
                .then(menu.close.bind(menu));
        });
        $("#regisbtn").click(function () {
         
            content.load('regis.html')
                .then(menu.close.bind(menu));
        });
        $("#basbtn").click(function () {
        
            content.load('busket.html')
                .then(menu.close.bind(menu));
        });
    }

});
