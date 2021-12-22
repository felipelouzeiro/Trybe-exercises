FROM nginx
COPY ./index.html /usr/share/nginx/html
EXPOSE 3000
ENV API_URL=http://localhost:8000/api/
WORKDIR /usr/share/nginx/html
RUN ls
ENTRYPOINT ["/usr/sbin/nginx"]
CMD ["-g", "daemon off;"]

# $ docker build . //construindo a imagem
# $ docker images  //verifficando na lista de imagens
# $ docker build . //
# $ docker container run -d -p 3000:80 2ed4f78e623d   //rodando imagem criada usando o id dela                                                                                                                130 ↵
# no navegador localhost:3000/ com a porta especificada