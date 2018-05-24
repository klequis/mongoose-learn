import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  function syntaxHighlight(json) {

    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    console.log(json)
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
      var cls = 'number';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'key';
        } else {
          cls = 'string';
        }
      } else if (/true|false/.test(match)) {
        cls = 'boolean';
      } else if (/null/.test(match)) {
        cls = 'null';
      }
      // return '<span class="' + cls + '">' + match + '</span>';
      console.log(cls);
      return <span class={cls}>hi</span>
    });
  }

  var obj = {
    a: 1,
    'b': 'foo',
    c: [
      false,
      'false',
      null,
      'null', {
        d: {
          e: 1.3e5,
          f: '1.3e5'
        }
      }
    ]
  };
  var str = JSON.stringify(obj, undefined, 2);


  const code = syntaxHighlight(str)

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <pre>{code}</pre>
      </div>
    )
}

export default App;
