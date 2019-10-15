


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



    //login
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            //var displayName = user.displayName;
            var email = user.email;
            console.log(email + "signed in");
            // var emailVerified = user.emailVerified;
            // var photoURL = user.photoURL;
            // var isAnonymous = user.isAnonymous;
            // var uid = user.uid;
            // var providerData = user.providerData;
            // ...
        } else {
            console.log("sign out");
            // User is signed out.
            // ...
        }
    });

    if (page.id === 'loginPage') {
        console.log("loginPage");

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


        db.collection("promotionOnefreeOne").get().then((querySnapshot1) => {
            querySnapshot1.forEach((doc) => {

                var item1 = `
              <ons-carousel-item modifier="nodivider" id="${doc.data().id}" class="recomended_item">
                  <div class="thumbnails" style="background-image: url('${doc.data().photoUrl}') ;width="200px">
                  </div>
                  <div class="recomended_item_title" id="item1_name">${doc.data().name}</div>
              </ons-carousel-item>`

                $("#carousels").append(item1);
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
