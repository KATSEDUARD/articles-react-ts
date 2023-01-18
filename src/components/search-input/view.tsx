import { FormControl, InputLabel, InputAdornment, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { constants } from '../../pages/homePage/constants';
import './styles.scss';
import { useStoreActions } from '../../store/hooks/hooks';

const { PLACEHOLDER } = constants;

export function SearchInput() {
    const actions = useStoreActions(actions => actions);
    const onChangeHandler = (e: any) => actions.filter(e.target.value);

    return <div className="search-input"><FormControl onChange={onChangeHandler} className="form-control" fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">{PLACEHOLDER}</InputLabel>
        <OutlinedInput
        id="outlined-adornment-amount"
        startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
        label="Amount"
        />
    </FormControl>
    </div>;
};