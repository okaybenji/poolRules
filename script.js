var poolRulesApp = angular.module('poolRulesApp', []);

poolRulesApp.controller('poolRulesCtrl', ['$scope',
                              
  function poolRulesCtrl($scope) {
    
    $scope.printRules;
    
    $scope.randomize = function randomize() {
      $scope.panels.forEach(function(panel) {
        // select random radio
        var rando = Math.floor(Math.random()*panel.radios.length);
        panel.selected = panel.radios[rando].name;
        // randomize checkboxes
        panel.checkboxes.forEach(function(checkbox) {
          checkbox.checked = Math.random() < 0.5;
        });
      });
    };
    
    $scope.setDefaults = function setDefaults(game) {
      switch(game) {
        case '9-Ball':
          $scope.panels[1].selected = 'Free-Ballin\'';
          break;
        default:
          $scope.panels[1].selected = 'Cow Fries';
      }
    };
    
    $scope.panels = [
      {
        title: 'Game',
        selected: '8-Ball',
        radios: [
          {
            name: '8-Ball',
            desc: 'Classic game of skill.'
          },
          {
            name: '9-Ball',
            desc: 'Might as well flip a coin.'
          },
          {
            name: 'Cut-Throat',
            desc: 'Because we have more enemies than friends.'
          }
        ],
        checkboxes: []
      },
      {
        title: 'Ball-in-Hand',
        selected: 'Cow Fries',
        radios: [
          {
            name: 'Cow Fries',
            desc: 'Balls from the kitchen.'
          },
          {
            name: 'Free-Ballin\'',
            desc: 'Anywhere on the table.'
          }
        ],
        checkboxes: []
      },
      {
        title: 'Agreements',
        selected: 'Littlefinger',
        radios: [
          {
            name: 'Littlefinger',
            desc: 'Players may make agreements, but they are not enforceable.'
          },
          {
            name: 'Goldman',
            desc: 'Players may enter into binding contracts.'
          }
        ],
        checkboxes: []
      },
      {
        title: 'Love Taps',
        selected: 'Friendly',
        radios: [
          {
            name: 'Friendly',
            desc: 'A player who accidentally taps the cue ball may reset and try again.'
          },
          {
            name: 'Hateful',
            desc: 'A player who accidentally taps the cue ball forfeits his turn.'
          }
        ],
        checkboxes: []
      },
      {
        title: 'Skipping',
        selected: 'Shame On Me',
        radios: [
          {
            name: 'Shame On Me',
            desc: 'A player who is skipped forfeits his turn.'
          },
          {
            name: 'Shame On You',
            desc: 'A player who is skipped takes the next turn. Player who skipped loses his next turn.'
          }
        ],
        checkboxes: []
      },
      {
        title: 'Pocket Scratches',
        selected: 'The Rupesh',
        game: 'Cut-Throat',
        radios: [
          {
            name: 'The Rupesh',
            desc: 'A ball from each set (other than the player\'s) is returned to the table.'
          },
          {
            name: 'The Benji',
            desc: 'A ball from each set which is spoken for (other than the player\'s) is returned to the table.'
          }
        ],
        checkboxes: [
          {
            name: 'Angel',
            desc: 'A player may call the pocket where he will scratch. If he scratches in the called pocket, he may designate any number of players to return a ball to the table. If he does not scratch in the called pocket, this is to be treated as a normal pocket scratch.',
            checked: false
          }
        ]
      }
    ];

  }
]);