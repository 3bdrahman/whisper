import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
	reducerPath: 'main',
	tagTypes: [],
	endpoints: (build) => ({
		postAiText: build.mutation({
			query: (payload) => ({
				url: 'openai/text',
				method: 'POST',
				body: payload,
			}),
		}),
	}),
});
export const apiCode = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
	reducerPath: 'main',
	tagTypes: [],
	endpoints: (build) => ({
		postAiCode: build.mutation({
			query: (payload) => ({
				url: 'openai/code',
				method: 'POST',
				body: payload,
			}),
		}),
	}),
});

export const apiLogin = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
	reducerPath: 'main',
	tagTypes: [],
	endpoints: (build) => ({
		postLogin: build.mutation({
			query: (payload) => ({
				url: 'auth/login',
				method: 'POST',
				body: payload,
			}),
		}),
	}),
});
export const apiSignup = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
	reducerPath: 'main',
	tagTypes: [],
	endpoints: (build) => ({
		postSignup: build.mutation({
			query: (payload) => ({
				url: 'auth/signup',
				method: 'POST',
				body: payload,
			}),
		}),
	}),
});

export const { usePostAiTextMutation} = api;
export const { usePostAiCodeMutation } = apiCode;
export const { usePostLoginMutation } = apiLogin
export const { usePostSignupMutation } = apiSignup;
