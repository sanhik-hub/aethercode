import React from 'react';
import Editor from '@monaco-editor/react';

export default function App() {
  const [theme, setTheme] = React.useState<'light'|'dark'>('light');
  const [language, setLanguage] = React.useState('javascript');
  const [value, setValue] = React.useState(`// AetherCode\n// Welcome! Start typing...\n\nfunction hello(){\n  console.log("Hello, AetherCode");\n}\n`);

  const headerClass = theme === 'dark' ? 'toolbar dark' : 'toolbar';
  const editorTheme = theme === 'dark' ? 'vs-dark' : 'vs-light';

  return (
    <div style={{height:'100%', display:'flex', flexDirection:'column'}}>
      <div className={headerClass}>
        <strong>AetherCode</strong>
        <div className="spacer" />
        <label>
          Lang:&nbsp;
          <select
            value={language}
            onChange={(e)=>setLanguage(e.target.value)}
            style={{padding:'6px'}}
          >
            <option>javascript</option>
            <option>typescript</option>
            <option>python</option>
            <option>cpp</option>
            <option>java</option>
            <option>rust</option>
            <option>go</option>
            <option>json</option>
            <option>markdown</option>
            <option>html</option>
            <option>css</option>
            <option>shell</option>
          </select>
        </label>
        <button
          onClick={()=>setTheme(t=>t==='dark'?'light':'dark')}
          style={{marginLeft:8,padding:'6px 10px',border:'1px solid #e5e7eb',background:'transparent',cursor:'pointer'}}
          title="Toggle theme"
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </div>

      <div style={{flex:1, minHeight:0}}>
        <Editor
          height="100%"
          language={language}
          theme={editorTheme}
          value={value}
          onChange={(v)=>setValue(v ?? '')}
          options={{
            minimap: { enabled: true },
            automaticLayout: true,
            fontSize: 14,
            tabSize: 2,
            wordWrap: 'on',
            smoothScrolling: true
          }}
        />
      </div>
    </div>
  );
}
