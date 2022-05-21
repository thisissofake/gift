import * as React from 'react';

import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import { Wrapper, Action } from './styled';

type EntryProps = {
  onSuccess: () => void;
};

function Entry({ onSuccess }: EntryProps) {
  const SECRET = 'шарлотта';

  const [loadingText, setLoadingText] = React.useState('');
  const [code, setCode] = React.useState<null | string>(null);
  const [submitCode, setSubmitCode] = React.useState<null | string>(null);

  const error = React.useMemo(() => {
    if (submitCode && submitCode.toLowerCase() !== SECRET) {
      return 'Неправильный код!';
    }

    if (code !== null && code.length === 0) {
      return 'Введи меня пожалуйста :c';
    }

    return undefined;
  }, [code, submitCode]);

  return (
    <Wrapper>
      <Typography variant='h4' gutterBottom>
        Хей!
      </Typography>
      <Typography variant='h4' gutterBottom>
        Здесь ты найдешь информацию о своём подарке
      </Typography>
      <Typography variant='h4' gutterBottom>
        Но сперва введи секретное слово:
      </Typography>

      <form
        onSubmit={e => {
          e.preventDefault();

          if (code?.toLowerCase().trim() === SECRET) {
            setLoadingText('Хммм...');

            setTimeout(() => {
              setLoadingText('Ну даже не знаю...');

              setTimeout(() => {
                setLoadingText('Ладно');

                setTimeout(() => {
                  onSuccess();
                }, 1500);
              }, 3000);
            }, 3000);
          } else {
            setSubmitCode(code);
          }
        }}
      >
        <TextField
          error={!!error}
          id='outlined-basic'
          label='Вводи сюда'
          variant='outlined'
          fullWidth
          value={code}
          disabled={!!loadingText}
          onChange={e => {
            setSubmitCode(null);

            setCode(e.target.value);
          }}
          helperText={error}
        />

        <Action>
          <LoadingButton
            loading={!!loadingText}
            loadingPosition='start'
            variant='contained'
            fullWidth
            type='submit'
          >
            {loadingText || 'Тык'}
          </LoadingButton>
        </Action>
      </form>
    </Wrapper>
  );
}

export default Entry;
