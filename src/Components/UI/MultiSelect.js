import Select from "react-select";

export const MultiSelect = ({className, placeholder, field, form, options, isMulti=false}) => {

    const getOptions = (data) => {
        return data?.map(item => ({
            ...item,
            label : item.name,
            value : item?.name
        }))
    }
    
    const onChange = (option) => {
        form.setFieldValue(
            field.name,
            (option).map((item) => item.value)
        )
    }

    return (
        <Select className={className}
                name={field.name}
                onChange={onChange}
                placeholder={placeholder}
                options={getOptions(options)}
                isMulti={true}/>
    );
};

export default MultiSelect;