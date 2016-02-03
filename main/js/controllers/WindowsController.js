/* Setup Windows page controller */

angular.module('MetronicApp').controller('WindowsController', ['$rootScope', '$scope', 'settings', '$http', '$uibModal', function ($rootScope, $scope, settings, $http, $uibModal) {
    $scope.$on('$viewContentLoaded', function () {
        // initialize core components
        App.initAjax();
        // set default layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;
    });

    // bring in the data
    $http.get('js/docs.json').success(function (data) {
        $scope.docs = data;
    });

    // control accordion
    $scope.oneAtATime = false;

    // modal
    $scope.open = function (size) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/modal.html',
            controller: 'ModalInstance',
            size: size
        })
    };
}]);


// Note that $modalInstance represents a modal window (instance) dependency. It is not the same as the $uibModal service used above.

angular.module('MetronicApp').controller('ModalInstance', [
    '$scope', '$modalInstance',
    function ($scope, $modalInstance) {

        $scope.new_message = function (message) {
            console.log(message);
        };
    }
]);
