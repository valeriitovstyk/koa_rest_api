--
-- PostgreSQL database dump
--

-- Dumped from database version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: authors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.authors (
    id integer NOT NULL,
    name character varying(255),
    email character varying(255),
    password character varying(255)
);


ALTER TABLE public.authors OWNER TO postgres;

--
-- Name: authors_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.authors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.authors_id_seq OWNER TO postgres;

--
-- Name: authors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.authors_id_seq OWNED BY public.authors.id;


--
-- Name: comments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comments (
    id integer NOT NULL,
    text character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "postId" integer,
    "authorId" integer
);


ALTER TABLE public.comments OWNER TO postgres;

--
-- Name: comments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.comments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comments_id_seq OWNER TO postgres;

--
-- Name: comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.comments_id_seq OWNED BY public.comments.id;


--
-- Name: posts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    title character varying(255),
    content character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "authorId" integer
);


ALTER TABLE public.posts OWNER TO postgres;

--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.posts_id_seq OWNER TO postgres;

--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- Name: authors id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.authors ALTER COLUMN id SET DEFAULT nextval('public.authors_id_seq'::regclass);


--
-- Name: comments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments ALTER COLUMN id SET DEFAULT nextval('public.comments_id_seq'::regclass);


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- Data for Name: authors; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.authors (id, name, email, password) VALUES (1, 'Nicholas', 'Jazmin_Volkman@hotmail.com', 'GTMl1AlJIbP43u5');
INSERT INTO public.authors (id, name, email, password) VALUES (3, 'Kianna', 'Lou.Ruecker4@gmail.com', 'DnU4z1Hxhew2VLG');
INSERT INTO public.authors (id, name, email, password) VALUES (4, 'Harry', 'Kianna2@hotmail.com', 'vcuoIyCClV8oOJ0');
INSERT INTO public.authors (id, name, email, password) VALUES (5, 'Quinn', 'Judd.Blick20@hotmail.com', 'RnzFy9fOa2MIRlA');
INSERT INTO public.authors (id, name, email, password) VALUES (6, 'Demetris', 'Marshall.Glover@yahoo.com', 'SDb9i9MZc6CDbf9');
INSERT INTO public.authors (id, name, email, password) VALUES (7, 'Eldon', 'Adah_Ruecker45@gmail.com', 'S7SBCKRcUMd0Gwn');
INSERT INTO public.authors (id, name, email, password) VALUES (8, 'Beverly', 'Laverne.Ferry12@hotmail.com', 'C8Ze9sygIaQnS2t');
INSERT INTO public.authors (id, name, email, password) VALUES (9, 'Jermaine', 'Dillon58@yahoo.com', 'VZVNzh3bPsHXPiD');
INSERT INTO public.authors (id, name, email, password) VALUES (10, 'Okey', 'Annetta28@gmail.com', 'SHmUd1VTBgPVdPP');
INSERT INTO public.authors (id, name, email, password) VALUES (11, 'Meaghan', 'Robin.Schowalter@gmail.com', 'eVqaJGqo1RvmocK');
INSERT INTO public.authors (id, name, email, password) VALUES (12, 'Shane', 'Alexandrine.Kutch@yahoo.com', 'a26OqGj1oWM_4MK');
INSERT INTO public.authors (id, name, email, password) VALUES (13, 'Naomie', 'Ora_Runolfsson@hotmail.com', 'IKtdFtfp0UEBYNi');
INSERT INTO public.authors (id, name, email, password) VALUES (14, 'Wilfrid', 'Rudolph.Hackett62@gmail.com', 'YTLQko1wmJIrecn');
INSERT INTO public.authors (id, name, email, password) VALUES (15, 'Jakob', 'Mackenzie_Hessel@hotmail.com', 'jLMsmYBtUadxW5p');
INSERT INTO public.authors (id, name, email, password) VALUES (16, 'Sofia', 'Adolf_Stracke87@yahoo.com', 'Gsj1_LasJQ1tyul');
INSERT INTO public.authors (id, name, email, password) VALUES (17, 'Jadon', 'Nathan21@yahoo.com', '13FSD4josVvx1v8');
INSERT INTO public.authors (id, name, email, password) VALUES (18, 'Deion', 'Pedro74@hotmail.com', 'yu_LYZiq3dUiBoM');
INSERT INTO public.authors (id, name, email, password) VALUES (19, 'Vito', 'Maegan_Hermiston@gmail.com', 'lL2uMgKY85flBbM');
INSERT INTO public.authors (id, name, email, password) VALUES (20, 'Sigrid', 'Edgardo13@yahoo.com', '2qifPZR3xjD1DLm');
INSERT INTO public.authors (id, name, email, password) VALUES (21, 'Kayla', 'Rebekah_Renner@hotmail.com', 'ijEa9QYRXKnI19i');
INSERT INTO public.authors (id, name, email, password) VALUES (22, 'Rebecca', 'Pascale_Green@yahoo.com', '5zVMfjSvMKe49mh');
INSERT INTO public.authors (id, name, email, password) VALUES (23, 'Margaret', 'Candelario56@yahoo.com', 'gAmRt85IT_qi4J1');
INSERT INTO public.authors (id, name, email, password) VALUES (24, 'Gregorio', 'Lon.Mertz49@gmail.com', 'xaEkaeJg96EeVsj');
INSERT INTO public.authors (id, name, email, password) VALUES (25, 'Cyril', 'Tierra.Jast@yahoo.com', '6KVOaMjU16mMrsK');
INSERT INTO public.authors (id, name, email, password) VALUES (26, 'Jabari', 'Clint_Schmeler@yahoo.com', 'yE6zNf4TK4ZnCAT');
INSERT INTO public.authors (id, name, email, password) VALUES (27, 'Betty', 'Daron80@gmail.com', '2lvp9CaGn5aeCSJ');
INSERT INTO public.authors (id, name, email, password) VALUES (28, 'Gonzalo', 'Shanny_OKeefe43@gmail.com', 'BQKFZJGzHkNM4I6');
INSERT INTO public.authors (id, name, email, password) VALUES (29, 'Bart', 'Columbus25@yahoo.com', '8DWMCTiV3BQ1cxu');
INSERT INTO public.authors (id, name, email, password) VALUES (2, 'Halle', 'May_Kutch@gmail.com', '$2b$05$n8JVSkULiZ8U0lBIzHU7.u2Z0R7CczGiABeKRaHF2yshXQ/SShVve');
INSERT INTO public.authors (id, name, email, password) VALUES (32, 'name_test', 'email_test', '$2b$05$aBCB/jk.ecr67YzZDrYvL.fVyGVRaaw6171X0bIZD4z6AOk4YcgvK');
INSERT INTO public.authors (id, name, email, password) VALUES (33, 'name_test2', 'email_test2', '$2b$05$hPuTbr7sv0Au0DBTBhY7s.vPyyxNCdn/NuLDEXu/Lepa01yGcWM5i');
INSERT INTO public.authors (id, name, email, password) VALUES (30, 'name_test_update', 'email_test2_update', '$2b$05$cU4G5MKWFrepBlhXQ4RkCu9c7W5P7M0H1Qup2cacDdpKgAfMsn1uu');


--
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.comments (id, text, "createdAt", "updatedAt", "postId", "authorId") VALUES (14, 'Aut perspiciatis totam ullam excepturi.', '2019-10-28 22:38:41.669+02', '2019-10-28 22:38:41.669+02', 7, 15);
INSERT INTO public.comments (id, text, "createdAt", "updatedAt", "postId", "authorId") VALUES (15, 'Vel deserunt sint ipsa ea qui molestiae.', '2019-10-28 22:38:41.67+02', '2019-10-28 22:38:41.67+02', 7, 15);
INSERT INTO public.comments (id, text, "createdAt", "updatedAt", "postId", "authorId") VALUES (13, 'Sunt ducimus rerum consectetur ab.', '2019-10-28 22:38:41.669+02', '2019-10-28 22:38:41.669+02', 6, 15);
INSERT INTO public.comments (id, text, "createdAt", "updatedAt", "postId", "authorId") VALUES (10, 'Consequatur repudiandae dolore ut eaque.', '2019-10-28 22:38:41.667+02', '2019-10-28 22:38:41.667+02', 3, 4);
INSERT INTO public.comments (id, text, "createdAt", "updatedAt", "postId", "authorId") VALUES (4, 'Alias qui soluta nihil accusantium id.', '2019-10-28 22:38:41.664+02', '2019-10-28 22:38:41.664+02', 4, 4);
INSERT INTO public.comments (id, text, "createdAt", "updatedAt", "postId", "authorId") VALUES (11, 'Et illum quibusdam.', '2019-10-28 22:38:41.667+02', '2019-10-28 22:38:41.667+02', 4, 5);
INSERT INTO public.comments (id, text, "createdAt", "updatedAt", "postId", "authorId") VALUES (8, 'Dolor est reprehenderit ea autem.', '2019-10-28 22:38:41.666+02', '2019-10-28 22:38:41.666+02', 1, 2);
INSERT INTO public.comments (id, text, "createdAt", "updatedAt", "postId", "authorId") VALUES (2, 'Adipisci rerum recusandae commodi repudiandae est aut et accusamus aut.', '2019-10-28 22:38:41.662+02', '2019-10-28 22:38:41.662+02', 2, 2);
INSERT INTO public.comments (id, text, "createdAt", "updatedAt", "postId", "authorId") VALUES (9, 'Qui repellat voluptas ratione ut cumque.', '2019-10-28 22:38:41.666+02', '2019-10-28 22:38:41.666+02', 2, 3);
INSERT INTO public.comments (id, text, "createdAt", "updatedAt", "postId", "authorId") VALUES (5, 'Qui at natus harum enim ullam maxime distinctio eligendi saepe.', '2019-10-28 22:38:41.664+02', '2019-10-28 22:38:41.664+02', 5, 5);
INSERT INTO public.comments (id, text, "createdAt", "updatedAt", "postId", "authorId") VALUES (7, 'Eos aut quaerat perferendis molestias.', '2019-10-28 22:38:41.665+02', '2019-10-28 22:38:41.665+02', 7, 1);
INSERT INTO public.comments (id, text, "createdAt", "updatedAt", "postId", "authorId") VALUES (12, 'Asperiores nam voluptas hic consequatur sit enim occaecati modi rerum.', '2019-10-28 22:38:41.668+02', '2019-10-28 22:38:41.668+02', 5, 6);
INSERT INTO public.comments (id, text, "createdAt", "updatedAt", "postId", "authorId") VALUES (6, 'Fuga delectus numquam enim totam nemo necessitatibus.', '2019-10-28 22:38:41.665+02', '2019-10-28 22:38:41.665+02', 6, 6);
INSERT INTO public.comments (id, text, "createdAt", "updatedAt", "postId", "authorId") VALUES (16, 'Eos esse accusamus officiis beatae et mollitia quia autem laboriosam.', '2019-10-28 22:38:41.67+02', '2019-10-28 22:38:41.67+02', 7, 15);
INSERT INTO public.comments (id, text, "createdAt", "updatedAt", "postId", "authorId") VALUES (17, 'sdsdf', '2019-10-29 11:49:51.747+02', '2019-10-29 11:49:51.747+02', 3, 2);
INSERT INTO public.comments (id, text, "createdAt", "updatedAt", "postId", "authorId") VALUES (1, 'text_update', '2019-10-28 22:38:41.661+02', '2019-10-31 23:14:25.701+02', 5, 5);
INSERT INTO public.comments (id, text, "createdAt", "updatedAt", "postId", "authorId") VALUES (18, 'text_add', '2019-10-31 23:18:01.085+02', '2019-10-31 23:18:01.085+02', 5, 5);


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.posts (id, title, content, "createdAt", "updatedAt", "authorId") VALUES (15, 'quos', 'Animi neque cum corrupti eos aperiam alias impedit eligendi fuga.', '2019-10-28 22:38:41.67+02', '2019-10-28 22:38:41.67+02', 1);
INSERT INTO public.posts (id, title, content, "createdAt", "updatedAt", "authorId") VALUES (3, 'quo', 'Voluptatem ipsum similique est doloribus placeat nam et ipsam.', '2019-10-28 22:38:41.663+02', '2019-10-28 22:38:41.663+02', 3);
INSERT INTO public.posts (id, title, content, "createdAt", "updatedAt", "authorId") VALUES (8, 'qui', 'Hic sed expedita repudiandae ab quia.', '2019-10-28 22:38:41.666+02', '2019-10-28 22:38:41.666+02', 1);
INSERT INTO public.posts (id, title, content, "createdAt", "updatedAt", "authorId") VALUES (7, 'aut', 'Officiis magnam corporis dignissimos.', '2019-10-28 22:38:41.665+02', '2019-10-28 22:38:41.665+02', 1);
INSERT INTO public.posts (id, title, content, "createdAt", "updatedAt", "authorId") VALUES (1, 'ex', 'Dicta et magni voluptas itaque explicabo.', '2019-10-28 22:38:41.661+02', '2019-10-28 22:38:41.661+02', 1);
INSERT INTO public.posts (id, title, content, "createdAt", "updatedAt", "authorId") VALUES (6, 'laborum', 'Natus voluptatem vitae veniam sit aliquam.', '2019-10-28 22:38:41.664+02', '2019-10-28 22:38:41.664+02', 6);
INSERT INTO public.posts (id, title, content, "createdAt", "updatedAt", "authorId") VALUES (12, 'quod', 'Atque et qui neque aut.', '2019-10-28 22:38:41.668+02', '2019-10-28 22:38:41.668+02', 3);
INSERT INTO public.posts (id, title, content, "createdAt", "updatedAt", "authorId") VALUES (4, 'eveniet', 'Voluptate dolores ut soluta.', '2019-10-28 22:38:41.663+02', '2019-10-28 22:38:41.663+02', 4);
INSERT INTO public.posts (id, title, content, "createdAt", "updatedAt", "authorId") VALUES (11, 'quis', 'Voluptatem nesciunt et porro ut similique qui neque.', '2019-10-28 22:38:41.667+02', '2019-10-28 22:38:41.667+02', 2);
INSERT INTO public.posts (id, title, content, "createdAt", "updatedAt", "authorId") VALUES (10, 'explicabo', 'Officia ut non.', '2019-10-28 22:38:41.667+02', '2019-10-28 22:38:41.667+02', 2);
INSERT INTO public.posts (id, title, content, "createdAt", "updatedAt", "authorId") VALUES (9, 'reprehenderit', 'Eligendi recusandae esse.', '2019-10-28 22:38:41.666+02', '2019-10-28 22:38:41.666+02', 2);
INSERT INTO public.posts (id, title, content, "createdAt", "updatedAt", "authorId") VALUES (14, 'magni', 'Aut iste aut.', '2019-10-28 22:38:41.669+02', '2019-10-28 22:38:41.669+02', 10);
INSERT INTO public.posts (id, title, content, "createdAt", "updatedAt", "authorId") VALUES (2, 'qui', 'Et molestiae aut accusamus consequatur molestiae praesentium.', '2019-10-28 22:38:41.662+02', '2019-10-28 22:38:41.662+02', 2);
INSERT INTO public.posts (id, title, content, "createdAt", "updatedAt", "authorId") VALUES (13, 'sequi', 'Rerum fugiat dolores laboriosam inventore nisi molestiae.', '2019-10-28 22:38:41.668+02', '2019-10-28 22:38:41.668+02', 4);
INSERT INTO public.posts (id, title, content, "createdAt", "updatedAt", "authorId") VALUES (5, 'fuga', 'Quam qui quia in tempore deleniti ex sit quod.', '2019-10-28 22:38:41.664+02', '2019-10-28 22:38:41.664+02', 5);
INSERT INTO public.posts (id, title, content, "createdAt", "updatedAt", "authorId") VALUES (17, 'post_title', 'post_content', '2019-10-31 23:06:46.305+02', '2019-10-31 23:06:46.305+02', 2);


--
-- Name: authors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.authors_id_seq', 33, true);


--
-- Name: comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.comments_id_seq', 18, true);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.posts_id_seq', 17, true);


--
-- Name: authors authors_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.authors
    ADD CONSTRAINT authors_pkey PRIMARY KEY (id);


--
-- Name: comments comments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: comments comments_authorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT "comments_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES public.authors(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: comments comments_postId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT "comments_postId_fkey" FOREIGN KEY ("postId") REFERENCES public.posts(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: posts posts_authorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT "posts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES public.authors(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

