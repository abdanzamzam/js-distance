# js-distance v1.0.0

Ini adalah package nodejs sederhana untuk menghitung jarak antara dua titik koordinat latitude dan longitude.

### Contoh penggunaan

```javascript
const jsDistance = require("./js-distance");

const jsDistanceObj = new jsDistance(
    -6.2973856, // origin latitude
    106.6388177, // origin longitude
    -6.3027637, // destination latitude
    106.6410986 // destination longitude
)

console.log(jsDistanceObj.count().toMiles()); // to miles (default)
console.log(jsDistanceObj.count().toKilometre()); // to kilometre
```
#### Hasil
```text
0.5238991320272929 mil
0.8431339247333317 km
```
