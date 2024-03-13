import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from 'react';
import {getData} from '../services/getData';

const MainContext = createContext();

const formattedDate = createdAt => {
  return createdAt.toLocaleString();
};

const initialState = {
  income: 0,
  expense: 0,
  description: '',
  createdAt: new Date().toISOString(),
  isLoading: false,
  allData: [],
  isNotificationIncome: false,
  isNotificationExpense: false,
  message: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'addincomeData':
      return {
        ...state,
        income: action.payload.amount,
        description: action.payload.description,
        createdAt: action.payload.createdAt,
      };

    case 'loading':
      return {
        ...state,
        isLoading: true,
      };
    case 'datarecieved':
      return {
        ...state,
        isLoading: false,
      };

    case 'allData':
      return {
        ...state,
        allData: action.payload,
      };
    case 'postingData':
      return {
        ...state,
        allData: [...state.allData, action.payload],
      };
    case 'clearAll':
      return {
        ...state,
        allData: [],
      };
    case 'notification':
      return {
        ...state,
        isNotificationIncome: action.payload.notify,
        message: action.payload.message,
      };
    case 'expNotification':
      return {
        ...state,
        isNotificationExpense: action.payload.notify,
        message: action.payload.message,
      };
    case 'edit':
      return {...state, allData: action.payload};

    default:
      throw new Error('Invalid action type ');
  }
}

function MainProvider({children}) {
  const [
    {
      income,
      expense,
      balance,
      description,
      createdAt,
      isLoading,
      allData,
      isNotificationIncome,
      isNotificationExpense,
      message,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  // derived states
  const totalIncome =
    allData
      .filter(currElem => currElem.type === 'income')
      .reduce((acc, currElem) => acc + currElem.amount, 0) ?? 0;

  const totalExpense =
    allData
      .filter(currElem => currElem.type === 'expense')
      .reduce((acc, currElem) => acc + currElem.amount, 0) ?? 0;

  const totalBalance = totalIncome - totalExpense;

  // FETCHING CURRENT USER DATA FROM FIREBASE
  useEffect(function () {
    async function fetchingData() {
      try {
        dispatch({type: 'loading'});
        const data = await getData();
        console.log(data);
        dispatch({type: 'allData', payload: data});
      } catch (err) {
        console.error(err.message);
      } finally {
        dispatch({type: 'datarecieved'});
      }
    }
    fetchingData();
  }, []);

  // POSTING DATA TO FIREBASE
  async function postingData(formData) {
    if (!formData) return;
    try {
    } catch (err) {
      console.error(err.message);
    }
  }

  async function editData(editedFormData) {}

  async function deleteTransactions(id) {}

  async function clearAllTransactions() {}

  return (
    <MainContext.Provider
      value={{
        income,
        expense,
        balance,
        description,
        createdAt,
        dispatch,
        isDatePickerVisible,
        setDatePickerVisibility,
        formattedDate,
        allData,
        isLoading,
        totalIncome,
        postingData,
        totalExpense,
        totalBalance,
        deleteTransactions,
        clearAllTransactions,
        isNotificationIncome,
        isNotificationExpense,
        editData,
        message,
      }}>
      {children}
    </MainContext.Provider>
  );
}

function useMainContext() {
  const context = useContext(MainContext);
  return context;
}

export {useMainContext, MainProvider};
