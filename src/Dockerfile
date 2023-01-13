FROM tmvdl/android:ionic

RUN cordova telemetry off

WORKDIR /app

RUN cordova create counter com.brtmvdl.counter counter

WORKDIR /app/counter

COPY www/html www

RUN cordova platform add android

RUN cordova build android
