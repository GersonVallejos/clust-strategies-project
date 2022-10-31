import imp

from clust_strategies_app.viewsets import DataSetViewset, ClientInfoViewset, ClustResultsViewset, CompanyViewset
from rest_framework import routers
from clust_strategies_app.views import LoginView
router = routers.DefaultRouter()
router.register('dataset',DataSetViewset)
router.register('info',ClientInfoViewset)
router.register('cluster',ClustResultsViewset)
router.register('company', CompanyViewset)

#router.register('accounts',LoginView)
#