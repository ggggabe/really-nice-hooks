# Really Nice Hooks


1. useRefs(...refs)

Use them like you would usually use a ref.

```
const [refOne, refTwo, refThree] = useRef(null, null, 3)

console.log({
  refOne,       // { current: null }
  refTwo,       // { current: null }
  refThree      // { current: 3 }
})

return <div>
  <div ref={refOne}></div>
  <div ref={refTwo}></div>
  <div ref={refThree}></div>
</div>
```

2. `useKeyBindings(keyBindings, targetRef): [freeKeyBindings, registerKeyBindings]`


```
function ListWithVimBindings() {
  const items = [{name: 'one', value: 'One'}, {name: 'two', value: 'Two'}, {name: 'three', value: 'Three'}]
  const [currentItem, setCurrentItem] = useState(listItems[0])
  const listRef = useRef()

  const [free, register] = useKeyBindings({
    j: {
      down: () => setCurrentItem(items[(items.indexOf(currentItem) + 1) % items.length])      //navigate to next item when j is pressed
    },
    k: {
      up: () => setCurrentItem(items[(items.indexOf(currentItem) || items.length) - 1])       //navigate to previous item when k is pressed
    }
  }, listRef)

  return <ul ref={listRef}>
    {items.map(item => <li> {currentItem === item ? <h1> {item.value} </h1> : <span> {item.value} </span>} </li>)}
  </ul>
}
```
