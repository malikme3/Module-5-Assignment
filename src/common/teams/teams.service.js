(function() {
	"use strict";

	angular.module('common').service('TeamService', TeamService);

	TeamService.$inject = ['$http'];
	function TeamService($http) {
		var service = this;
service.getSource = function(category) {
	var config = {};
	    if (category) {
	      config.params = {'category': category};
	    }
			return $http.get('http://img.photobucket.com/albums/v506/midge411/picspams/moviechar/bhuvan/01.png', config).then(function (response) {
      return response.data;
    });
	return src;
};

		service.getComingMatches = function() {
			var data = [];
			data = [{
  "week": 1,
  "match_no": 5,
  "host-team": "sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel",
  "guest-team": "eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies",
  "match-date": "7/23/2017",
  "match-ground": "primis in faucibus orci",
  "match-umpire": "Virginia Gomez"
}, {
  "week": 2,
  "match_no": 6,
  "host-team": "elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas",
  "guest-team": "pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer",
  "match-date": "7/29/2017",
  "match-ground": "sapien arcu sed augue",
  "match-umpire": "Philip Howard"
}, {
  "week": 3,
  "match_no": 7,
  "host-team": "amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in",
  "guest-team": "nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient",
  "match-date": "9/14/2017",
  "match-ground": "vehicula consequat morbi",
  "match-umpire": "Heather Walker"
}, {
  "week": 4,
  "match_no": 6,
  "host-team": "rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper",
  "guest-team": "eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt",
  "match-date": "10/26/2017",
  "match-ground": "libero convallis eget eleifend",
  "match-umpire": "Fred Harrison"
}, {
  "week": 5,
  "match_no": 10,
  "host-team": "semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus",
  "guest-team": "tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi",
  "match-date": "9/28/2017",
  "match-ground": "lacinia aenean sit amet justo morbi",
  "match-umpire": "Barbara Moore"
}, {
  "week": 6,
  "match_no": 7,
  "host-team": "consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede",
  "guest-team": "eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus",
  "match-date": "7/12/2017",
  "match-ground": "ipsum ac tellus semper",
  "match-umpire": "Heather Elliott"
}, {
  "week": 7,
  "match_no": 7,
  "host-team": "cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem",
  "guest-team": "blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id",
  "match-date": "10/31/2017",
  "match-ground": "non pretium quis lectus suspendisse",
  "match-umpire": "Gary Riley"
}, {
  "week": 8,
  "match_no": 15,
  "host-team": "suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla",
  "guest-team": "curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit",
  "match-date": "10/24/2017",
  "match-ground": "montes nascetur ridiculus mus etiam",
  "match-umpire": "Russell Dean"
}, {
  "week": 9,
  "match_no": 13,
  "host-team": "vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa",
  "guest-team": "lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et",
  "match-date": "3/25/2017",
  "match-ground": "quis orci eget orci vehicula",
  "match-umpire": "Todd Cole"
}, {
  "week": 10,
  "match_no": 6,
  "host-team": "sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in",
  "guest-team": "in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt",
  "match-date": "7/17/2017",
  "match-ground": "sed accumsan felis ut at",
  "match-umpire": "Bonnie Romero"
}]
			return data;
		};

	}
	;

})();
