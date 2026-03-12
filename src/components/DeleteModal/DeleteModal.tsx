import css from './DeleteModal.module.css';


interface DeleteModalProps {
    onCancel: () => void;
    onConfirm: () => void;
}

export default function DeleteModal({ onCancel, onConfirm }: DeleteModalProps) {


  return (
     <div className={css.overlay}>
      <div className={css.modal}>
        <h3 className={css.title}>Are you sure you want to delete this item?</h3>

        <div className={css.actions}>
          <button className={css.cancelBtn} onClick={onCancel}>
            Cancel
          </button>

          <button className={css.deleteBtn} onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}