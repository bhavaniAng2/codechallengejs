describe('Code Challange Sort Table Test', function() {
  var scope, $controllerConstructor, $http;
  beforeEach(module('sortingApp'));

  beforeEach(inject(function ($rootScope ,$controller, $http) {
    scope = $rootScope.$new();
    $controllerConstructor = $controller;
    http = $http;
  }));

  it('should load the Json Data on Success', function () {
    $controllerConstructor('mainCtrl', { $scope: scope , http: http });
    var resObj = {
      data:{
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
      };
    var responseObj = {
      then: function (success, error) {
        if (resObj.data) {
          success(resObj);
        } else {
          error(resObj);
        }
      }};
    var getJsonDataStub = sinon.stub(http, 'get');
    getJsonDataStub.withArgs().returns(responseObj);
    scope.loadData();
    expect(getJsonDataStub.withArgs().calledOnce).to.be.ok;
    expect(scope.dataExist).to.be.equal(true);
    expect(scope.events).to.equal(resObj.data);
  });

  it('should not load the Json Data on error', function () {
    $controllerConstructor('mainCtrl', { $scope: scope , http: http });
    var resObj = {
      status: 404,
      statusText: 'Not Found'
    };
    var responseObj = {
      then: function (success, error) {
        if (resObj.data) {
          success(resObj);
        } else {
          error(resObj);
        }
      }};
    var getJsonDataStub = sinon.stub(http, 'get');
    getJsonDataStub.withArgs().returns(responseObj);
    scope.loadData();
    expect(getJsonDataStub.withArgs().calledOnce).to.be.ok;
    expect(scope.dataExist).to.be.equal(false);
    expect(scope.errorMsg).to.equal('404: Data Not Found');
  });

});
