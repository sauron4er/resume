'use strict';

const e = React.createElement;

function EdmsModal() {
    const [liked, setLiked] = React.useState(false)

    return e(
      'button',
      { onClick: () => setLiked(true) },
      'Like'
    );

}

const domContainer = document.querySelector('#edms_modal_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(EdmsModal));