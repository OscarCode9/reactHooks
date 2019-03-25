var request = require("request");

var options = { method: 'POST',
  url: 'http://localhost:3550/api/info/user',
  headers: 
   { 'Postman-Token': 'bbd0a3c5-1310-4e75-b651-c2c8bd0e194c',
     'cache-control': 'no-cache',
     x_alt_referer: '',
     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36',
     Referer: 'http://localhost:9001/search',
     Origin: 'http://localhost:9001',
     Host: 'localhost:3550',
     'Content-Type': 'application/json',
     'Content-Length': '16',
     Connection: 'keep-alive',
     authorization: '302090C2,AciS24jfqLazDL1Ay7+g+ADATutxBqoFzn9MSuDVNeb65+Rmz8LA+3iBmWjwUUF1iADzVQwU7n9TJUh3Ex7AY9BpnR8rewDn0Y7GRvtUMrM5oOSAiyyRLpVjckcux+L5NuKAsZ82g/slsC5PMB+JwmcDeIKtuPMicSVQhEGuXHq4ujEytcJow/gy6c8FNHt/vYBNC3Ll2PtJFHgUHgiJ4knMFGqW185PqPwLlSJ0CtctrWpDiurhUHg2JKA5QFZxGJtjkSr9+qaz+MjcCGBh3DrTjyRlPQBOVFbV+j/1voPUC5fozqKaJFwX0CJrnRtSyWcOGhWE+ve3p7WAzyUftPpKSHhjsl2UrRboiuayoPNG7O3jXEkvrg75dU13hVPwV+/8ORxJ4q2XBY3liA5MZXumVgIjDfNythYAcq8e4wNYeVUNlcbpm+LjCcdtb17K/w6K7xOTlicEamm82wwv0gAwy8EoMOmjPX1JQXOppvggtKlPV1zmgMXdKBKqB7URD4xmtu5w+cyg69nKcqjmzMsN7oZEX3dVoQJ8Gkk0CrlBpdlRMgvowKRNOYs7xj1KWtwoocZPR+m6aodZecxg1ErfQ2dj9ZuHAhkhsT/E/Ybqyp1UZ6/NU919SJCOTvVF/hCkVbcpx0wB8vd2+GIf6fSVbSY3hD0/nI8GZ2yZpHw0JRDgUNKInJXvrsINhp++fYq9Vu3BExtKc/7TYbg5cMiMu4BxS4VabTTUkzVNtjiKQIYoyhWbChYRF5K+C7opt1KnL6707w2sX6LPcqPD4UiyRmbrcdzfVGGNVmokz8wIktq5nG15djmkB7eIMFXWnkjxhMtC4pUgSgg5V4gIC/LizVUIiwjYofCOhlsNKd/PcrvTTRbcSxtPfMNveOlqFFYHCwGUZiEmRfo2WQ7ybngdNVLaWdIKmovcxnHGZarzdqFA+LFDVrmChpIKp1gZRqT5YPLLw3fNzd/PJc4awpPfW1rqZSviNmYWE0l0FcN38QcYPt1n+1NcnhHJo+M2vkNVTCHKGdoDHovKDoPKjRqqPCbVEvXd+8btLZQIj5Nb1TmEqYLBp+XUkGfh1VYomiHKZaNnMXfSLAWbdsTW0Y77JeQZGWQAAUVcpWvgLwSMqswUMyluwK6IM8nJ3K9XNZxNZtAMAi89R7IgaVqRBDhhPmFdlq8d1NqL9RP5yVsj2LdqdBF9TgNFa3OIr1s5f/uz17gZONH0qODgsPy3gDqcr4Qrt89lajfjsnc6nsRtSJ3qiUd/CDr5+7BlF4r1bb5PY6qdAKDvjUyjSTCkrwOMyf9zwT1eRO+7+h6YcRGp9z3WVa6pmyij60vs71QfCuSLoGBOiCgJD5f7gle1eSMiehReaLtEFF32CMBpED+T2Ozu3LSJLV8hT9w7liFuniJ5YFSXtRc3UCJbVOGBVL3Z2svWQqj6Rd+RAoDwBP9Sbs3OJ5HZ+tFkRHU1AGEtSwwH+wPNlKsaGLDzDmSfAR5waJ2NqsMLU+QpLTN/6vix6r6rkuQV+2/J7HHfyvQ6VmOXRrJ1e4DJrJEk7XrUfdXFHmXFiyXgCKNrRPYUTrTWAgS6HJGYv66WIw6g5I1e/tfEWLowH8GiraE2+/l34rduPxoj98MPhtqg7zf88Wok2w175OFGBmi8DvndrkOo/WvLT0298g0VZKzPl8O6WDx/GTjEJQ0Hk9udZxz0IzR853KEQE+J+BCOGdntekjQx7NqmFmkxgeDGOvm5ymG3MZZ7L8MHMK1GenpgEkooTyqN5+GWOSfqZfHrVMO60+C2IXbnNAUaqCNg2l9WWJ+UUPGFGzGTnDuVrE/Qanykw943f8f/0UV72E1SLtKkhc5h/rBzKqR2T+WfY7bX1FCFVNS/gtmlS7NvdubK4k39RFpFQm/ePnGAup7LUyl+YbiWi55IivCIG3NbAGHSqhBjjofGblu/RVqT7xDZ4atpIo=',
     'Accept-Language': 'es-MX,es;q=0.9,en-US;q=0.8,en;q=0.7,es-419;q=0.6',
     'Accept-Encoding': 'gzip, deflate, br',
     accept: 'application/json, text/plain, */*' },
  body: { key: 'Cookie' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});