import {fetchBaseQuery, createApi} from "@reduxjs/toolkit/query/react";


export const productApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://pixabay.com/api/?key=23318306-98c4d0aa0699bc1eebba6ef1b' }),
    // endpoints: builder => ({
    //     // The `getPosts` endpoint is a "query" operation that returns data
    //     getPosts: builder.query({
    //         // The URL for the request is '/fakeApi/posts'
    //         query: () => '&q=owl'
    //     })
    // })
    endpoints(builder) {
        return {
            getPosts: builder.query({
                query(type="owl") {
                    return `&q=${type}`;
                }
            })
        }
    }

})

export const {useGetPostsQuery} = productApi;