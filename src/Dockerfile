FROM tmvdl/android:react-native

WORKDIR /app

COPY app .

RUN npm install

RUN npm run build

FROM tmvdl/android:app

RUN cordova telemetry off

WORKDIR /app

RUN cordova create counter com.brtmvdl.counter counter

WORKDIR /app/counter

COPY app/dist www

RUN cordova platform add android

RUN cordova build android
