module.exports = {
	columns: 12,
	offset: "20px",
	//mobileFirst: true,
	container: {
        maxWidth: "960px",
        fields: "10px"
    },
    breakPoints:{
        lg: {
            width: "1200px"
        },
        md: {
            width: "992px",
            fields: "15px"
        },
        sm: {
            width: "720px"
        },
        xs: {
            width: "576px",
            offset: "30px",
            fields: "10px"

        }
    }
	/*breakPoints: {
		md: {
            width: "920px",
            fields: "15px"
        },
        sm: {
            width: "720px"
        },
        xs: {
            width: "576px"
        },
        xxs: {
            width: "420px",
            offset: "10px",
            fields: "5px"
        }
	},*/
    //detailedCalc: true
};