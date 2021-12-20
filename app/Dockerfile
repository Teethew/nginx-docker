FROM centos:7

COPY etc/yum.repos.d /etc/yum.repos.d

RUN yum install -y \
    yum-utils \
    openssl \
    epel-release \
    nginx \
    nginx-module-njs

RUN mkdir -p /etc/ssl

COPY etc/ssl /etc/ssl

#RUN openssl req -x509 -newkey rsa:4096 -keyout key.pem -nodes\
#    -out cert.pem -sha256 -subj '//CN=localhost' -days 365 

COPY etc/nginx/ /etc/nginx/

EXPOSE 443

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]