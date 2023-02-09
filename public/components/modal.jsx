import * as React from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import RadioButtonsGroup from "./radio";
import Modal from "@mui/material/Modal";
import styles from "../../styles/modal.module.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
};

export default function BasicModal({ open, setOpen }) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={styles.boxes}>
          <div className={styles.modalContainer}>
            <div className={styles.modaltext}>
              <div className={styles.partOne}>
                <div className={styles.parttext}>
                  <h3>Welcome!</h3>
                  <p>Create an account and we'll reply shortly</p>
                </div>
                <div className={styles.partImg}>
                  <img src="/images/girl.png" />
                </div>
              </div>
              <div className={styles.secondPart}>
                <div className={styles.secondPartinfo}>
                  <div className={styles.modalImg}>
                    <img src="/images/logo.svg" />
                  </div>
                  <form>
                    <span>
                      <label>First Name</label>
                      <input type="name" />
                    </span>
                    <span>
                      <label>Last Name</label>
                      <input type="name" />
                    </span>
                    <span>
                      <label>Email Address</label>
                      <input type="email" label="Email Address" />
                    </span>
                    <div className={styles.radio}>
                      <RadioButtonsGroup />
                      <button>Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
