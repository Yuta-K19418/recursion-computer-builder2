import { Typography } from "@mui/material";
import React from "react";
import { useAppSelector } from "../app/hooks";
import { selectFormValue } from "../app/store";

const SelectedResult = () => {
  const formValue = useAppSelector(selectFormValue);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "75%",
          backgroundColor: "#3366CC",
          marginTop: 4,
          padding: 8,
        }}
      >
        <div
          style={{
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "white",
              }}
            >
              Your PC1
            </Typography>
          </div>
          <div
            style={{
              marginTop: 16,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                }}
              >
                CPU
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingLeft: 16,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                }}
              >
                Brand : {formValue.cpu.brand}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingLeft: 16,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                }}
              >
                Model : {formValue.cpu.model}
              </Typography>
            </div>
          </div>
          <div
            style={{
              marginTop: 16,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                }}
              >
                GPU
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingLeft: 16,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                }}
              >
                Brand : {formValue.gpu.brand}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingLeft: 16,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                }}
              >
                Model : {formValue.gpu.model}
              </Typography>
            </div>
          </div>
          <div
            style={{
              marginTop: 16,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                }}
              >
                RAM
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingLeft: 16,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                }}
              >
                Brand : {formValue.memoryCard.brand}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingLeft: 16,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                }}
              >
                Model : {formValue.memoryCard.model}
              </Typography>
            </div>
          </div>
          <div
            style={{
              marginTop: 16,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                }}
              >
                Storage
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingLeft: 16,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                }}
              >
                Disk : {formValue.storage.type}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingLeft: 16,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                }}
              >
                Storage : {formValue.storage.storageCapacity}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingLeft: 16,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                }}
              >
                Brand : {formValue.storage.brand}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingLeft: 16,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                }}
              >
                Model : {formValue.storage.model}
              </Typography>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "white",
                width: "40%",
              }}
            >
              Gaming :
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                width: "40%",
              }}
            >
              Work :
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedResult;
