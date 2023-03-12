import Image from "next/image"
import { Button, Stack, TextField, Typography } from "@mui/material"
import { GreenButton } from "components/GreenButton"
import { WhiteButton } from "components/WhiteButton"

interface SelectYourApprenticeProps {
  name: string
}

export function SelectYourApprentice({ name }: SelectYourApprenticeProps) {
  return (
    <Stack borderRadius="12px" p={2} spacing={2} maxWidth="400px">
      <Stack direction="row" justifyContent="space-between">
        <Image src="/message.svg" width={48} height={48} alt="messageIcon" />
        <Button>
          <Image src="/x.svg" width={12} height={12} alt="x" />
        </Button>
      </Stack>
      <Stack spacing={0.5}>
        <Typography variant="h6">Message {name}</Typography>
        <Typography variant="body2">Send message to {name}</Typography>
      </Stack>
      <TextField
        variant="outlined"
        placeholder="Your message..."
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
          },
        }}
      />
      <Stack direction="row" justifyContent="space-between">
        <WhiteButton>
          <Typography width="8rem">Cancel</Typography>
        </WhiteButton>
        <GreenButton>
          <Typography width="8rem">Send</Typography>
        </GreenButton>
      </Stack>
    </Stack>
  )
}
