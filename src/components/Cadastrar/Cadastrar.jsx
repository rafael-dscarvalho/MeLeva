import { Dialog } from './styles'

export function Cadastrar() {
    const [modalOpen, setModalOpen] = useState(false)

    function openModal() {
        setModalOpen(true);
    }

    function closeModal() {
        setModalOpen(false);
    }

    return (
        <Dialog>
            <h1>Oi, eu sou um modal sem graça! :T</h1>
        </Dialog>
    )
}