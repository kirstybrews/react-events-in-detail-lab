import React from 'react'

class DelayedButton extends React.Component {
    
    handleClick = (event) => {
        this.props.onDelayedClick(event)
    }

    render() {
        return (
            <button 
                onClick={
                    (event) => {
                        const target = event
                        setTimeout(() => {
                            this.handleClick(target);
                            }, this.props.delay)
                    }
                }
            >
            </button>
        )
    }
}

export default DelayedButton;