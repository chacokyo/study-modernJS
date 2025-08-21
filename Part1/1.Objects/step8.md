## toString / valueOf

```js
let hamster = {
  name: "jisu",
  age: 1004,

  toString() {
    return this.name
  },

  valueOf() {
    return this.age
  },

	alert(hamster) // toString
	alert(+hamster) // valueOf
	alert(hamster + 100) // valueOf
}
```

- hint가 string: toString 호출
- hint기 number: valueOf 호출
