import React from 'react'
import useTabs from './useTabs'

const content = [
  {
    tab: "Section 1",
    content: "content1"
  },
  {
    tab: "Section 2",
    content: "content2"
  }
]

export default function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      {content.map((section,index) => (
        <button onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      ))}
      <div>
        {currentItem.content}
      </div>
    </div>
  )
}
