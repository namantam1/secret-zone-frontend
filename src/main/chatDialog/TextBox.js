import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'

export default function TextBox() {
    const [ws, room] = useSelector(state => [state.rooms.ws, state.rooms.activeRoomId])
    const [text, setText] = useState("")

    // console.log(text)
    const send_message = (event) => {
        event.preventDefault();
        // console.log(JSON.stringify({text:text}), room)
        ws.send(JSON.stringify({
            type: "message",
            data: {
                typ: "txt",
                text: text,
                roomId: room
            }
        }))
        setText("");
    }
    // console.log(text)

    return (
        <div className="container text-box">
            <div className="col-md-12">
                <div className="bottom">
                    <form className="text-area" onSubmit={send_message}>
                        <textarea 
                        onChange={e => setText(e.target.value)} 
                        onKeyDown={e => {
                                if (e.keyCode === 13 && !e.shiftKey) {
                                    send_message(e);
                                }
                        }}
                        value={text} 
                        className="form-control" 
                        placeholder="Start typing..." 
                        rows={1} />
                        <div className="add-smiles">
                            <span title="add icon" className="em em-blush" />
                        </div>
                        <div className="smiles-bunch">
                            <i className="em em---1" />
                            <i className="em em-smiley" />
                        </div>
                        <button type="submit" className="btn send"><i className="ti-location-arrow" /></button>
                    </form>
                    <label>
                        <input type="file" />
                        <span className="btn attach"><i className="ti-clip" /></span>
                    </label>
                </div>
            </div>
        </div>
    )
}
