from collections import OrderedDict

from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

PAGE_SIZE_QUERY_PARAM = "page_size"


class VerbosePagination(PageNumberPagination):
    """
    Verbose Pagination Class
    """

    page_size = 15
    page_size_query_param = PAGE_SIZE_QUERY_PARAM
    max_page_size = 100

    def get_paginated_response(self, data):
        return Response(
            OrderedDict(
                [
                    ("count", self.page.paginator.count),
                    ("next", self.get_next_link()),
                    ("previous", self.get_previous_link()),
                    ("page", self.page.number),
                    ("page_size", self.page.paginator.per_page),
                    ("num_pages", self.page.paginator.num_pages),
                    ("results", data),
                ]
            )
        )
