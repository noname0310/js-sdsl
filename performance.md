This is Js-sdsl performance test. To get source code you can go to [github](https://github.com/js-sdsl/js-sdsl/tree/main/performance).

## Environment

```bash
Linux 5.15.0-1019-azure x64
Node.JS 16.17.0
V8 9.4.146.26-node.22
Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz × 2
```

## Result

### Stack

<table>
  <tr>
    <td>testFunc</td>
    <td>testNum</td>
    <td>containerSize</td>
    <td>runTime</td>
  </tr>
  <tr>
    <td>push</td>
    <td>1000000</td>
    <td>2000000</td>
    <td>35</td>
  </tr>
  <tr>
    <td>clear</td>
    <td>1</td>
    <td>2000000</td>
    <td>0</td>
  </tr>
</table>

### Queue

<table>
  <tr>
    <td>testFunc</td>
    <td>testNum</td>
    <td>containerSize</td>
    <td>runTime</td>
  </tr>
  <tr>
    <td>push</td>
    <td>1000000</td>
    <td>2000000</td>
    <td>25</td>
  </tr>
  <tr>
    <td>clear</td>
    <td>1</td>
    <td>2000000</td>
    <td>0</td>
  </tr>
</table>

### PriorityQueue

<table>
  <tr>
    <td>testFunc</td>
    <td>testNum</td>
    <td>containerSize</td>
    <td>runTime</td>
  </tr>
  <tr>
    <td>constructor</td>
    <td>1</td>
    <td>1000000</td>
    <td>18</td>
  </tr>
  <tr>
    <td>push</td>
    <td>1000000</td>
    <td>2000000</td>
    <td>50</td>
  </tr>
  <tr>
    <td>pop all</td>
    <td>1</td>
    <td>2000000</td>
    <td>895</td>
  </tr>
</table>

### LinkList

<table>
  <tr>
    <td>testFunc</td>
    <td>testNum</td>
    <td>containerSize</td>
    <td>runTime</td>
  </tr>
  <tr>
    <td>pushBack</td>
    <td>1000000</td>
    <td>2000000</td>
    <td>274</td>
  </tr>
  <tr>
    <td>popBack</td>
    <td>1000000</td>
    <td>2000000</td>
    <td>34</td>
  </tr>
  <tr>
    <td>getElementByPos</td>
    <td>1000</td>
    <td>2000000</td>
    <td>4</td>
  </tr>
  <tr>
    <td>setElementByPos</td>
    <td>1000</td>
    <td>2000000</td>
    <td>4</td>
  </tr>
  <tr>
    <td>eraseElementByPos</td>
    <td>50</td>
    <td>2000000</td>
    <td>851</td>
  </tr>
  <tr>
    <td>insert</td>
    <td>50</td>
    <td>2000050</td>
    <td>853</td>
  </tr>
  <tr>
    <td>eraseElementByValue</td>
    <td>1</td>
    <td>2000050</td>
    <td>30</td>
  </tr>
  <tr>
    <td>reverse</td>
    <td>1</td>
    <td>1999950</td>
    <td>27</td>
  </tr>
  <tr>
    <td>unique</td>
    <td>1</td>
    <td>2000050</td>
    <td>47</td>
  </tr>
  <tr>
    <td>sort</td>
    <td>1</td>
    <td>3000000</td>
    <td>3006</td>
  </tr>
  <tr>
    <td>clear</td>
    <td>1</td>
    <td>3000000</td>
    <td>0</td>
  </tr>
  <tr>
    <td>pushFront</td>
    <td>1000000</td>
    <td>1000000</td>
    <td>141</td>
  </tr>
  <tr>
    <td>popFront</td>
    <td>1000000</td>
    <td>1000000</td>
    <td>21</td>
  </tr>
  <tr>
    <td>merge</td>
    <td>1</td>
    <td>1000000</td>
    <td>112</td>
  </tr>
</table>

### Deque

<table>
  <tr>
    <td>testFunc</td>
    <td>testNum</td>
    <td>containerSize</td>
    <td>runTime</td>
  </tr>
  <tr>
    <td>pushBack</td>
    <td>1000000</td>
    <td>2000000</td>
    <td>60</td>
  </tr>
  <tr>
    <td>popBack</td>
    <td>1000000</td>
    <td>2000000</td>
    <td>85</td>
  </tr>
  <tr>
    <td>getElementByPos</td>
    <td>1000000</td>
    <td>2000000</td>
    <td>47</td>
  </tr>
  <tr>
    <td>setElementByPos</td>
    <td>1000000</td>
    <td>2000000</td>
    <td>47</td>
  </tr>
  <tr>
    <td>eraseElementByPos</td>
    <td>50</td>
    <td>2000000</td>
    <td>2140</td>
  </tr>
  <tr>
    <td>insert</td>
    <td>50</td>
    <td>2000050</td>
    <td>2167</td>
  </tr>
  <tr>
    <td>eraseElementByValue</td>
    <td>1</td>
    <td>2000050</td>
    <td>123</td>
  </tr>
  <tr>
    <td>reverse</td>
    <td>1</td>
    <td>1999950</td>
    <td>43</td>
  </tr>
  <tr>
    <td>unique</td>
    <td>1</td>
    <td>2000050</td>
    <td>54</td>
  </tr>
  <tr>
    <td>sort</td>
    <td>1</td>
    <td>3000000</td>
    <td>1864</td>
  </tr>
  <tr>
    <td>clear</td>
    <td>1</td>
    <td>3000000</td>
    <td>0</td>
  </tr>
  <tr>
    <td>pushFront</td>
    <td>2000000</td>
    <td>2000000</td>
    <td>61</td>
  </tr>
  <tr>
    <td>popFront</td>
    <td>1000000</td>
    <td>2000000</td>
    <td>16</td>
  </tr>
  <tr>
    <td>shrinkToFit</td>
    <td>1</td>
    <td>1000000</td>
    <td>71</td>
  </tr>
</table>

### OrderedSet

<table>
  <tr>
    <td>testFunc</td>
    <td>testNum</td>
    <td>containerSize</td>
    <td>runTime</td>
  </tr>
  <tr>
    <td>constructor</td>
    <td>1</td>
    <td>1000000</td>
    <td>1628</td>
  </tr>
  <tr>
    <td>insert</td>
    <td>1000000</td>
    <td>2000000</td>
    <td>692</td>
  </tr>
  <tr>
    <td>eraseElementByKey</td>
    <td>1000000</td>
    <td>3000000</td>
    <td>391</td>
  </tr>
  <tr>
    <td>eraseElementByPos</td>
    <td>10</td>
    <td>3000000</td>
    <td>759</td>
  </tr>
  <tr>
    <td>union</td>
    <td>1</td>
    <td>2999990</td>
    <td>2713</td>
  </tr>
  <tr>
    <td>lowerBound</td>
    <td>1000000</td>
    <td>2999990</td>
    <td>1609</td>
  </tr>
  <tr>
    <td>upperBound</td>
    <td>1000000</td>
    <td>2999990</td>
    <td>1674</td>
  </tr>
  <tr>
    <td>reverseLowerBound</td>
    <td>1000000</td>
    <td>2999990</td>
    <td>1630</td>
  </tr>
  <tr>
    <td>reverseUpperBound</td>
    <td>1000000</td>
    <td>2999990</td>
    <td>1649</td>
  </tr>
</table>

### OrderedMap

<table>
  <tr>
    <td>testFunc</td>
    <td>testNum</td>
    <td>containerSize</td>
    <td>runTime</td>
  </tr>
  <tr>
    <td>constructor</td>
    <td>1</td>
    <td>1000000</td>
    <td>1793</td>
  </tr>
  <tr>
    <td>setElement</td>
    <td>1000000</td>
    <td>2000000</td>
    <td>683</td>
  </tr>
  <tr>
    <td>eraseElementByKey</td>
    <td>1000000</td>
    <td>2000000</td>
    <td>355</td>
  </tr>
  <tr>
    <td>eraseElementByPos</td>
    <td>100</td>
    <td>1000000</td>
    <td>5651</td>
  </tr>
  <tr>
    <td>union</td>
    <td>1</td>
    <td>1999900</td>
    <td>1966</td>
  </tr>
  <tr>
    <td>lowerBound</td>
    <td>1000000</td>
    <td>1999900</td>
    <td>1562</td>
  </tr>
  <tr>
    <td>upperBound</td>
    <td>1000000</td>
    <td>1999900</td>
    <td>1563</td>
  </tr>
  <tr>
    <td>reverseLowerBound</td>
    <td>1000000</td>
    <td>1999900</td>
    <td>1523</td>
  </tr>
  <tr>
    <td>reverseUpperBound</td>
    <td>1000000</td>
    <td>1999900</td>
    <td>1542</td>
  </tr>
</table>

### HashSet

<table>
  <tr>
    <td>testFunc</td>
    <td>testNum</td>
    <td>containerSize</td>
    <td>runTime</td>
  </tr>
  <tr>
    <td>constructor</td>
    <td>1</td>
    <td>1000000</td>
    <td>1537</td>
  </tr>
  <tr>
    <td>insert</td>
    <td>1000000</td>
    <td>2000000</td>
    <td>5486</td>
  </tr>
  <tr>
    <td>find</td>
    <td>2000000</td>
    <td>2000000</td>
    <td>2380</td>
  </tr>
  <tr>
    <td>eraseElementByKey</td>
    <td>2000000</td>
    <td>2000000</td>
    <td>1703</td>
  </tr>
</table>

### HashMap

<table>
  <tr>
    <td>testFunc</td>
    <td>testNum</td>
    <td>containerSize</td>
    <td>runTime</td>
  </tr>
  <tr>
    <td>constructor</td>
    <td>1</td>
    <td>1000000</td>
    <td>2308</td>
  </tr>
  <tr>
    <td>setElement</td>
    <td>1000000</td>
    <td>1000000</td>
    <td>4395</td>
  </tr>
  <tr>
    <td>getElementByKey</td>
    <td>1000000</td>
    <td>1000000</td>
    <td>3872</td>
  </tr>
  <tr>
    <td>eraseElementByKey</td>
    <td>1000000</td>
    <td>1000000</td>
    <td>4138</td>
  </tr>
</table>