'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/main.dart.js": "0cc0f9c67c5e1752546df81cb5eef33f",
"/manifest.json": "0a3ff767e53856d2cc5d4e30fb675a4b",
"/index.html": "c34367bd34945ab6a3ef198fa864180e",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/FontManifest.json": "6a9557c0e3a3d18226cfb0eda9aead5c",
"/assets/LICENSE": "a2016e235a7d6c9c7a3ea7f872ec6413",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ea892e09437fcaa050b2b15c53173b7",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "51d23d1c30deda6f34673e0d5600fd38",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "d51b09f7b8345b41dd3b2201f653c62b",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/lib/src/pages/animations/anim3.dart": "3bca822a790fbdfce85c32324161dd04",
"/assets/lib/src/pages/animations/animation1/details.dart": "18bb89611f9065b24943456a447a6e80",
"/assets/lib/src/pages/animations/animation1/animation1.dart": "40e95edd7ed750587af78cb089358db1",
"/assets/lib/src/pages/animations/anim2.dart": "f1ecb5a2bfa5362349c0a83aeeffe00c",
"/assets/lib/src/pages/animations/anim4.dart": "c2bc595cea9d2d232b1f35862dc742be",
"/assets/lib/src/pages/animations/anim5.dart": "c57d209fbe30729712bdb38c195bb58f",
"/assets/lib/src/pages/ecommerce/ecommerce4.dart": "6e1f2588c91c7c304787aa4283d49571",
"/assets/lib/src/pages/ecommerce/ecommerce1.dart": "65563da88c86204f8e01e94437608681",
"/assets/lib/src/pages/ecommerce/ecommerce5.dart": "430e2ebaa83418a958ee0dd4f537babd",
"/assets/lib/src/pages/ecommerce/ecommerce_detail2.dart": "550d6094c4f73a02533d3c9a01ffd32c",
"/assets/lib/src/pages/ecommerce/ecommerce_detail3.dart": "a38993530078e6a82064c24c9784bc5a",
"/assets/lib/src/pages/ecommerce/ecommerce2.dart": "f7be8e8bdc79baba5a09739ab40fea7c",
"/assets/lib/src/pages/ecommerce/cart1.dart": "5547185a9e61a4299fd5f165fb4e13cc",
"/assets/lib/src/pages/ecommerce/ecommerce_detail1.dart": "ed817896694d0f86d95ba28d8354f9b9",
"/assets/lib/src/pages/ecommerce/checkout1.dart": "866cc195a61cdabcdc594bb80e9678a7",
"/assets/lib/src/pages/ecommerce/confirm_order1.dart": "9f1be7bb2987afff9d71e620ba8c1857",
"/assets/lib/src/pages/ecommerce/cart2.dart": "02b5fadda60e90aaf5188efe7caf3110",
"/assets/lib/src/pages/misc/springy_slider_page.dart": "7a30c1ea3ab71e3b0d295ec70ff34670",
"/assets/lib/src/pages/misc/chat2.dart": "391b1e1fc550089548a9ad19e09507e4",
"/assets/lib/src/pages/misc/navybar.dart": "a7dabfa358f895c77490742c352897a0",
"/assets/lib/src/pages/misc/gallery1.dart": "bd01f21479ef9512f1de9b0cefeae046",
"/assets/lib/src/pages/misc/sliver_appbar.dart": "792944fbde43ed9ddb3cb176c0c23bc7",
"/assets/lib/src/pages/misc/sliders.dart": "30e5ff607d2e9d28d5f7da3b2df2c3ea",
"/assets/lib/src/pages/misc/crop.dart": "0b919d3376ca42756ee4871ed9d176ef",
"/assets/lib/src/pages/misc/loaders.dart": "21efc81bc6ec2d3294f3c6047eaeb984",
"/assets/lib/src/pages/misc/musicplayer.dart": "39e2ab82371822790f2ba3faecdb2669",
"/assets/lib/src/pages/misc/chatui.dart": "ee3cd1a799ed7f879a1017485b7f3f29",
"/assets/lib/src/pages/misc/form_elements.dart": "78d9ac9017db530e477eb56ec5f0c3ef",
"/assets/lib/src/pages/misc/image_popup.dart": "bc9814224b04077b4165b416cfb83a60",
"/assets/lib/src/pages/misc/bottomsheet.dart": "c19f0a57a32b40fc68cf95eeb462454c",
"/assets/lib/src/pages/misc/musicplayer2.dart": "07bcb01cdbd7e482fdf3cb3d8b2ba0ca",
"/assets/lib/src/pages/dialogs/dialogs.dart": "69b1fe4a9d128cf9a151b236947fd27b",
"/assets/lib/src/pages/onboarding/intro2.dart": "9d6cd72ac3f66f8ccdd549b930332f53",
"/assets/lib/src/pages/onboarding/intro5.dart": "348b72c19dce59dc9b828b2e2a1c6012",
"/assets/lib/src/pages/onboarding/intro4.dart": "5fb0cf1fbcd1b1c4a41c0bfb1c6b5f13",
"/assets/lib/src/pages/onboarding/intro6.dart": "bd2e48681dcd8ecbabb4f983c11e0653",
"/assets/lib/src/pages/onboarding/smart_wallet_onboarding.dart": "b6e0089096697c70a597def67e7232f2",
"/assets/lib/src/pages/onboarding/intro3.dart": "73f8ce8cb8cc8c2848a18ce51d4d414f",
"/assets/lib/src/pages/onboarding/landing1.dart": "56f5b92c5b55aedddee2dced368df89a",
"/assets/lib/src/pages/navigation/drawer1.dart": "346de2df914929948eef089fb5b13403",
"/assets/lib/src/pages/navigation/hiddenmenu.dart": "3bcf7292500baa43baa600d4e2025e70",
"/assets/lib/src/pages/navigation/drawer2.dart": "cfbec8227e8b43411400996e641748e4",
"/assets/lib/src/pages/hotel/hhome.dart": "63fe16de4858646c305e9e13850764eb",
"/assets/lib/src/pages/hotel/details.dart": "9fbb99fd2af7b3dac3fa81d6ca3631a8",
"/assets/lib/src/pages/grocery/gdetails.dart": "e70867666a7b6f24dfef85ed14c2b2e7",
"/assets/lib/src/pages/grocery/ghome.dart": "f01d3d53af1156b33d72d861334a9807",
"/assets/lib/src/pages/invitation/inlanding.dart": "cecb1cdc15a6037d12b02d783b119d41",
"/assets/lib/src/pages/invitation/inauth.dart": "7f88e94363d49d90051236600775e76b",
"/assets/lib/src/pages/invitation/invitation1.dart": "917c79c2ae183aaaade37b7ca0bd8ca8",
"/assets/lib/src/pages/settings/settings3.dart": "0b9ea5b3cab2925c4d81c683d0664ebe",
"/assets/lib/src/pages/settings/settings2.dart": "88f84f8d64ae3258b30fc4d1a0e62c7f",
"/assets/lib/src/pages/settings/settings1.dart": "65a16e0e09154474daa5a3a5e5354784",
"/assets/lib/src/pages/travel/travel_nepal.dart": "3fab36b553f781f88bce7f28ee8fae98",
"/assets/lib/src/pages/travel/travel_home.dart": "6944cf35c11dcc413fe665b577e27af6",
"/assets/lib/src/pages/travel/tdestination.dart": "b87348d45ea2eeb479ee498eddde3dbc",
"/assets/lib/src/pages/travel/thome.dart": "05f91a73725a993cb32ea350a5b3ae7b",
"/assets/lib/src/pages/profile/profile3.dart": "1f218f5fd55dedbf18826eca1f2535ea",
"/assets/lib/src/pages/profile/profile4.dart": "939bedaf77a264fb016e479ad4f97a68",
"/assets/lib/src/pages/profile/profile5.dart": "afe35e8dc2a1b3aa4173762caadd03e0",
"/assets/lib/src/pages/profile/profile2.dart": "a38110f712f0916b401fdea65d465b2e",
"/assets/lib/src/pages/profile/profile7.dart": "fcc4cfcf7b63386114f11a90c945df7d",
"/assets/lib/src/pages/profile/profile6.dart": "7d53f80b02e0330d569d4b4eeb947ffa",
"/assets/lib/src/pages/profile/profile8.dart": "85a3d0cab59a8648b26b265fdacc56f3",
"/assets/lib/src/pages/profile/profile1.dart": "e3923b135f92342030a8e603b3611e61",
"/assets/lib/src/pages/blog/sports_news1.dart": "4327db63c111414d099a3b6a8fbb55ca",
"/assets/lib/src/pages/blog/article1.dart": "271b935b43aa58ce0e3f70c8a00f6ca7",
"/assets/lib/src/pages/blog/bhome1.dart": "f826f4544e61c16e42b652bb9fb75ac5",
"/assets/lib/src/pages/blog/article2.dart": "f8831270d14425dd14404b8c6bee3c57",
"/assets/lib/src/pages/blog/news1.dart": "f96f2676418c2ad29707b46e6fde867a",
"/assets/lib/src/pages/todo/todo_home2.dart": "a51bc38b16d80d0b24bad6d2077f1e95",
"/assets/lib/src/pages/todo/todo2.dart": "6d7c74f24415dc658ed1dcea3b2d2210",
"/assets/lib/src/pages/todo/todo_home1.dart": "260522387a504f33f32509c742ec33a0",
"/assets/lib/src/pages/todo/todo_home3.dart": "cd9373e67ee60275c95eb5bada3d89bc",
"/assets/lib/src/pages/food/cake.dart": "23927419cc7146f7d3bb33df78d22727",
"/assets/lib/src/pages/food/recipe_list.dart": "f7fbf0754769b62989f6abdfaa5f6e8a",
"/assets/lib/src/pages/food/avocado.dart": "1ecc7f5c445131f0d1199e23d4f1e570",
"/assets/lib/src/pages/food/recipe_details.dart": "cc46fdf623e65939b8d26511d62f1ec8",
"/assets/lib/src/pages/food/recipe_single.dart": "72b3d733edc2712650fea02b291b0c9f",
"/assets/lib/src/pages/food/fdhome.dart": "5dca08b9e92e9167ca2fc4799d57eac7",
"/assets/lib/src/pages/dashboard/dash3.dart": "d926202d1d63ad24a316fbf016a7df46",
"/assets/lib/src/pages/dashboard/dash2.dart": "1a976ad973ee9d3b2538f91e74d1fbec",
"/assets/lib/src/pages/dashboard/dash1.dart": "14e3fb65c6305d46a93548331a840387",
"/assets/lib/src/pages/login/login1.dart": "7d3fca413adc2580903e7db1601b1774",
"/assets/lib/src/pages/login/login5.dart": "d890d97cd550eb07b08b904c203acb37",
"/assets/lib/src/pages/login/login3.dart": "5c723331d22fef96c7204721d93e4571",
"/assets/lib/src/pages/login/login2.dart": "056593784c3ca7748739efc20421b5ad",
"/assets/lib/src/pages/login/signup2.dart": "386c883de4e6e554de6fe7b0096d362b",
"/assets/lib/src/pages/login/signup1.dart": "cfa8447333b3b17603e1be3fb97f6938",
"/assets/lib/src/pages/login/login7.dart": "0b5e842f1710c3ff56888793ccf54783",
"/assets/lib/src/pages/login/auth2.dart": "22bb6de4ab1aeced6ebfaa26aef5ac5b",
"/assets/lib/src/pages/login/login6.dart": "5253f82cac7968b2c0f2b0b6f4111540",
"/assets/lib/src/pages/login/auth3.dart": "014fc89ab60994b3a074ce16c90eeb0d",
"/assets/lib/src/pages/login/login4.dart": "ef2c40616b39781c20e3e36ec77a5f93",
"/assets/lib/src/pages/login/auth1.dart": "76032ee7844a46e720b16508d1cf1604",
"/assets/lib/src/pages/lists/list2.dart": "1a5e55843e4778731c230ab34d58d899",
"/assets/lib/src/pages/lists/list1.dart": "d74ba3a96fc13fb3a42402db99287574",
"/assets/lib/src/pages/bike/home_page.dart": "62255fed473db503856eccdc7bb2b8c7",
"/assets/lib/src/pages/bike/bike_details.dart": "9ba8c6c2ec8de496f1106813207c255c",
"/assets/lib/src/pages/quiz_app/question.dart": "d02e60aae88c74518525712d8c5b866a",
"/assets/lib/src/pages/quiz_app/demo_values.dart": "94f1bb4e0e7243fbdd22d895743775bd",
"/assets/lib/src/pages/quiz_app/check_answers.dart": "c5444343b5d48d63234954c4bc13486b",
"/assets/lib/src/pages/quiz_app/quiz_options.dart": "09781be4400efb9cde37a4066f30d0e1",
"/assets/lib/src/pages/quiz_app/home.dart": "6bcb0f981fb7feb1dc0c9d173c1c32d2",
"/assets/lib/src/pages/quiz_app/quiz_page.dart": "48038009491627fbe8a921b6948c96ca",
"/assets/lib/src/pages/quiz_app/category.dart": "2ee2f4909b9dfad8271f4800ac803c75",
"/assets/lib/src/pages/quiz_app/quiz_finished.dart": "1cd3c846c83b5b84c069f60d01f59283",
"/assets/lib/src/khalti_clone/main.dart": "64d423c25d75417db2a25462db6c0590",
"/assets/lib/src/furniture_app/furniture_app.dart": "609b1f5b24a442a6b17e511f1296fcbf",
"/assets/lib/src/nic_asia_clone/nic_asia_app.dart": "157a0bf4a562a5edcd520ca906701ed5",
"/assets/assets/hotel/room2.jpg": "6f3ed637989dc9a91852ca9e859e9595",
"/assets/assets/hotel/room3.jpg": "582b5c922588fcfcb655ef2c5e082c75",
"/assets/assets/hotel/room1.jpg": "813ee64a2c15f48baf28e109ded1a66f",
"/assets/assets/hotel/room4.jpg": "894aa1aade9429e89d5da03e4b542937",
"/assets/assets/icon/feature_store.jpg": "dbd61a243681374e435a922bedc5c4b4",
"/assets/assets/icon/icon.png": "3c8ccc520c55ee2300ec0d477ec2922d",
"/assets/assets/icon/app-store-logo.jpg": "15657cc002c20325ee66acacd3619c38",
"/assets/assets/placeholder.jpg": "2ffedeeb13be4dc6e4fc5d6cb30a307e",
"/assets/assets/flare/bus.flr": "06c14bd0cb5adc270d81dc235b14720e",
"/assets/assets/fonts/MyFlutterApp.ttf": "22510a62b0a16eb5edd08efb55ee70a6",
"/assets/assets/fonts/icomoon.ttf": "d300230d95aef9b7e6259de1443e0e85",
"/assets/assets/smwallet/wallet2.png": "8e20a3f80ebedeaea74b2dd8fda070e0",
"/assets/assets/smwallet/wallet3.png": "fdc24f56361b8c884691f03701327ce4",
"/assets/assets/smwallet/logo.png": "e832e0abc9cbf4a991f70c73b46ac9bf",
"/assets/assets/smwallet/swipe-right.png": "9ce867bd21ea4694627a380f6d890351",
"/assets/assets/smwallet/wallet1.png": "80de561effd0aa7fbe8b586d966015d6",
"/assets/assets/nicasiaassets/nicLogo.png": "ac01b1a0344f7e0290a635b44de0d14b",
"/assets/assets/nicasiaassets/ic_transfer_32_4.png": "dabca4fa9bf9339145e1ba0e09ea061e",
"/assets/assets/nicasiaassets/tv.png": "ff37133e9649bd444c26f6f10550f63e",
"/assets/assets/nicasiaassets/credit_cards.png": "604ba10071ac60e529be33a7d1f70dd8",
"/assets/assets/nicasiaassets/settings.png": "298e7d6952441c6c93f5a3cf630556cd",
"/assets/assets/nicasiaassets/powered_by_google_light.png": "c33b6986f9630c954038133ba0b5fd8e",
"/assets/assets/nicasiaassets/el.png": "fed8f11a3113a518c2727809b9275641",
"/assets/assets/nicasiaassets/mountain.png": "59644be997f78521b96638792217511a",
"/assets/assets/nicasiaassets/esewa.jpg": "0d1801371f4fc5f39b09041ad6bbece5",
"/assets/assets/nicasiaassets/ic_fingerprint.png": "6fbedb82f216a826943cb555fa70429f",
"/assets/assets/nicasiaassets/ic_account.png": "62c46f6daf94b86f6b32b84083126cfb",
"/assets/assets/nicasiaassets/ic_username.png": "2642c170b53b1535a02fe04698592bfd",
"/assets/assets/nicasiaassets/crop__ic_cancel.png": "527b955533f6f560c28e5bea9d520aec",
"/assets/assets/nicasiaassets/profile.jpg": "df1bb8e030851d7e754873223263f394",
"/assets/assets/nicasiaassets/crop__ic_done.png": "f58bf6d1c4e505b75bae312d0368f037",
"/assets/assets/nicasiaassets/ic_launcher_round.png": "2a459f034fc8c7862f925cddfd3ecc75",
"/assets/assets/nicasiaassets/scan_2_pay.png": "edbd302049f27bb78ae7ce66c6a9e609",
"/assets/assets/nicasiaassets/ic_contact_list_24.png": "dc4f0a77b64ca0a115bec53354ec6798",
"/assets/assets/nicasiaassets/ic_calendar.png": "c4638ed6ec405897fba3d7a4e493ab58",
"/assets/assets/nicasiaassets/brand_alternate.png": "8f56f8d7f8a08f5b8c432a82dedbb7df",
"/assets/assets/nicasiaassets/ic_scan2pay_64_4.png": "ce670278424d7781c01aa8e8c1e1fb4d",
"/assets/assets/nicasiaassets/logo.png": "0cb100c9a48943a4c180c903e3e467f5",
"/assets/assets/nicasiaassets/ic_topup.png": "6636a56a7d0d2e1197e554ed50380c7d",
"/assets/assets/nicasiaassets/contact_list.png": "2ed773c46e42a7923e749f207c85c5b5",
"/assets/assets/nicasiaassets/ic_sch_payment_64_4.png": "2535754d0627f2153bfc0944a66cf969",
"/assets/assets/nicasiaassets/router.png": "69dc88471434849ee43b34840f34424b",
"/assets/assets/nicasiaassets/sas.png": "4f869dc823327ba730c3d4450cfb3c22",
"/assets/assets/nicasiaassets/fill_1_copy.png": "efd8a2edffa5b1e902a948d3c9ccdaee",
"/assets/assets/nicasiaassets/ic_fund_transfer.png": "e4b0ac78ff2bae15e7b5e0a952bf19ec",
"/assets/assets/nicasiaassets/ic_sms_32.png": "3ec60d3a5dc09a1d564448e1dfc5caf5",
"/assets/assets/nicasiaassets/ic_view_statement.png": "4960adf548ecc5353727e5e3e7093b18",
"/assets/assets/nicasiaassets/general_inquiry.png": "44733960a1ac008028782b83d13d44f1",
"/assets/assets/nicasiaassets/umb.png": "f5070041f5162e64fec885301145b99b",
"/assets/assets/nicasiaassets/ic_accout_list_24.png": "d52d5a34f03ff3ffa366502a1876a980",
"/assets/assets/nicasiaassets/brand_f1soft.png": "8afca482643e3d64975e819cf1bc2487",
"/assets/assets/nicasiaassets/ic_payments_64_4.png": "bd0c06ec2055d912a229d6043fb2eea8",
"/assets/assets/nicasiaassets/air.png": "ac171fc7b717830915ae1193c31ba302",
"/assets/assets/nicasiaassets/icon_more.png": "41b415c1ea302d6b64f530ab13362bff",
"/assets/assets/nicasiaassets/ic_action_payment.png": "245fa6f5c6110f8059c880897515220c",
"/assets/AssetManifest.json": "0115559cc07598c9b53c01f530a0a6df"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
