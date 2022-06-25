import React from "react";
import { Typography } from "@mui/material";
import { SelectedPC } from "../types";

interface Props {
  selectedPC: SelectedPC;
  index: number;
}

const SelectedResult = (props: Props) => {
  const { selectedPC, index } = props;
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
              Your PC{index}
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
                Brand : {selectedPC.form.cpu.brand}
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
                Model : {selectedPC.form.cpu.model}
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
                Brand : {selectedPC.form.gpu.brand}
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
                Model : {selectedPC.form.gpu.model}
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
                Brand : {selectedPC.form.memoryCard.brand}
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
                Model : {selectedPC.form.memoryCard.model}
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
                Disk : {selectedPC.form.storage.type}
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
                Storage : {selectedPC.form.storage.storageCapacity}
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
                Brand : {selectedPC.form.storage.brand}
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
                Model : {selectedPC.form.storage.model}
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
              Gaming : {Object.values(selectedPC.gamingBenchMarks).reduce((pv: number, cv: number) => pv + cv, 0)}%
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                width: "40%",
              }}
            >
              Work : {Object.values(selectedPC.workBenchMarks).reduce((pv: number, cv: number) => pv + cv, 0)}%
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedResult;
