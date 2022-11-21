#FROM python:2.7
FROM python:2.7.13
ENV PYTHONUNBUFFERED 1
ADD requirements /requirements
RUN pip install -r requirements/local.txt --trusted-host pypi.douban.com
RUN mkdir /code
WORKDIR /code
ADD ./ /code/

