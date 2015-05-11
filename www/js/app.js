// Ionic Parse Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'ionicParseApp' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'ionicParseApp.controllers' is found in controllers.js
angular.module('ionicParseApp',
        [ 'ionic', 'ionicParseApp.controllers', 'ionicParseApp.services' ]
    )
    
    .run(function($ionicPlatform, $ionicPopup) {
        $ionicPlatform.ready(function() {
            if(window.Connection) {
                if(navigator.connection.type == Connection.NONE) {
                    $ionicPopup.confirm({
                        title: "Internet Disconnected",
                        content: "The internet is disconnected on your device."
                    })
                    .then(function(result) {
                        if(!result) {
                            ionic.Platform.exitApp();
                        }
                    });
                }
            }
        });
    });
    
    .config(function($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('welcome', {
                url: '/welcome?clear',
                templateUrl: 'templates/welcome.html',
                controller: 'LoginController'
            })

            .state('app', {
                url: '/app?clear',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppController'
            })

            .state('app.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/home.html',
                        controller: 'HomeController'
                    }
                }
            })
            
            .state('app.schedule', {
                url: "/schedule",
                views: {
                    'menuContent': {
                        templateUrl: "templates/schedule.html",
                        controller: 'ScheduleCtrl'
                    }
                }
            })

            .state('app.session-detail', {
                url: "/session-detail/:sessionId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/detail.html",
                        controller: 'SessionDetailCtrl'
                    }
                }
            })

            .state('app.vendors', {
                url: '/vendors',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/vendors.html',
                        controller: 'VendorCtrl'
                    }
                }
            })

            .state('app.vendor-detail', {
                url: "/vendor-detail/:vendorId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/vendorDetail.html",
                        controller: 'VendorDetailCtrl'
                    }
                }
            })

            .state('app.presentations', {
                url: '/presentations',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/presentations.html',
                        controller: 'PresentationCtrl'
                    }
                }
            })
            
            .state('app.presentation-detail', {
                url: "/presentation-detail/:presentationId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/presentationDetail.html",
                        controller: 'PresentationDetailCtrl'
                    }
                }
            })
            
            .state('app.speakers', {
                url: '/speakers',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/speakers.html',
                        controller: 'SpeakerCtrl'
                    }
                }
            })
            
            .state('app.speaker-detail', {
                url: "/speaker-detail/:speakerId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/speakerDetail.html",
                        controller: 'SpeakerDetailCtrl'
                    }
                }
            })
            
            .state('app.feedback', {
                url: '/feedback',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/feedback.html',
                        controller: 'FeedbackCtrl'
                    }
                }
            })
            
            .state('app.feedback-detail', {
                url: "/feedback-detail/:evaluationId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/feedbackDetail.html",
                        controller: 'FeedbackDetailCtrl'
                    }
                }
            })
            
            .state('app.map', {
                url: '/map',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/map.html'
                    }
                }
            })

            .state('app.information', {
                url: '/information',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/information.html'
                    }
                }
            })

            .state('app.login', {
                url: '/login',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/login.html',
                        controller: 'LoginController'
                    }
                }
            })

            .state('app.forgot', {
                url: '/forgot',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/forgotPassword.html',
                        controller: 'ForgotPasswordController'
                    }
                }
            })

            .state('app.register', {
                url: '/register',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/register.html',
                        controller: 'RegisterController'
                    }
                }
            });

        $urlRouterProvider.otherwise('/welcome');
    })
    .run(function ($state, $rootScope) {
        Parse.initialize('mdUL65uAfVAUuVKzhGL5DDnYf2H944pm5Y168Ir8', 't0WH35eQxLJwNQRA4knEUwEG7ACXer6M6DkfqdBg');
        var currentUser = Parse.User.current();
        $rootScope.user = null;
        $rootScope.isLoggedIn = false;

        if (currentUser) {
            $rootScope.user = currentUser;
            $rootScope.isLoggedIn = true;
            $state.go('app.schedule');
        }
    });