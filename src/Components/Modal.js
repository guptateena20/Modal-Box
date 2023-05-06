import ModalBox from './ModalBox'
import { useModal } from './Modalcontext'

const Modal = () => {
    const data = useModal()
    const handleShow = () => {
        data.showModal(<ModalBox />)
    }

    return (
        <>
            <div className='show_modal_btn_div'>
                <button onClick={handleShow} className="show_modal_btn">Show Modal</button>
            </div>

            {data.modal}
        </>
    )
}

export default Modal
