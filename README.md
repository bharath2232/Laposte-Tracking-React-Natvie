CodeClimate : [![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/)
# Lapsote Tracking
Laposte tracking is an Android/Ios app for Tracking your shipments of Laposte in France with Tracking number
Developed with React Native

# Snapshorts
![alt text](https://bharath.fr/images/555.jpg)

# Requirement 

* React Native
* Expo
* Android Studio
* [Laposte API](https://developer.laposte.fr/products/suivi/latest)


## Installation

Clone the GitHub repository [React_Native-France-Shipping](https://github.com/bharath2232/React_Native-France-Shipping/) to install foobar.

```bash
git clone https://github.com/bharath2232/React_Native-France-Shipping.git
```

## Usage
Replace the API key with XXXX in handleSubmit function
```javascript
handleSubmit = (event) => {
  const headers = {
      'Postman-Token': '3adc4471-86e8-4615-83ed-e767d62856ff',
      'cache-control': 'no-cache',
      'X-Okapi-Key': 'XXXXXX'

  }
```
 To build a React Native Expo App [Check Here](https://docs.expo.io/versions/latest/distribution/building-standalone-apps/)
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
