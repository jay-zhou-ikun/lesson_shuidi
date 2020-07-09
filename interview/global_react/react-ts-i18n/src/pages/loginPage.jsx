import * as React from "react";
import Card from "@material-ui/core/Card"; /** card 组件 */
import { withStyles, createStyles  } from "@material-ui/core/styles";
// withRouter react-router-dom 高阶HOC组件 
import { withRouter, RouteComponentProps } from "react-router-dom";


const styles = theme => 
  createStyles({
    card: { /**样式的定制, 找个裁缝 */
      maxWidth: 400,
      margin: "0 auto"
    }
  })


const LoginPageInner = (props) => {
  console.log(props);
  const { classes } = props;
  return (
    <>
      <Card className={classes.card}>
      </Card>
    </>
  )
}
// HOC
export const LoginPage = withStyles(styles)(withRouter(LoginPageInner))