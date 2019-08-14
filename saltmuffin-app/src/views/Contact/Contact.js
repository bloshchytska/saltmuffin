import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.scss';

const contact = () => {
    return (
       <div>
           <div className="contact-wrapper">
               <div className="contact-wrapper__header">
                  <div className="contact-wrapper__header__close-link">
                      <Link to="/"> × </Link>
                  </div>
               </div>
               <div className="contact-wrapper__content">
                   <div className="contact-wrapper__img">
                       <img alt="Planet" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+IDwhLS0gQ3JlYXRlZCB3aXRoIFZlY3Rvcm5hdG9yIGZvciBpT1MgKGh0dHA6Ly92ZWN0b3JuYXRvci5pby8pIC0tPjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDsiIHhtbG5zOnZlY3Rvcm5hdG9yPSJodHRwOi8vdmVjdG9ybmF0b3IuaW8iIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgo8bWV0YWRhdGE+Cjx2ZWN0b3JuYXRvcjpzZXR0aW5nIGtleT0iRGlzcGxheVdoaXRlQmFja2dyb3VuZCIgdmFsdWU9IjAiLz4KPHZlY3Rvcm5hdG9yOnNldHRpbmcga2V5PSJSdWxlcnNWaXNpYmxlIiB2YWx1ZT0iMSIvPgo8dmVjdG9ybmF0b3I6c2V0dGluZyBrZXk9IlNuYXBUb0VkZ2VzIiB2YWx1ZT0iMCIvPgo8dmVjdG9ybmF0b3I6c2V0dGluZyBrZXk9IlVuaXRzIiB2YWx1ZT0iUGl4ZWxzIi8+Cjx2ZWN0b3JuYXRvcjpzZXR0aW5nIGtleT0iRHluYW1pY0d1aWRlcyIgdmFsdWU9IjAiLz4KPHZlY3Rvcm5hdG9yOnNldHRpbmcga2V5PSJTbmFwVG9Qb2ludHMiIHZhbHVlPSIwIi8+Cjx2ZWN0b3JuYXRvcjpzZXR0aW5nIGtleT0iU25hcFRvR3JpZCIgdmFsdWU9IjAiLz4KPHZlY3Rvcm5hdG9yOnNldHRpbmcga2V5PSJTbmFwVG9HdWlkZXMiIHZhbHVlPSIxIi8+Cjx2ZWN0b3JuYXRvcjpzZXR0aW5nIGtleT0iU2hvd0dyaWQiIHZhbHVlPSIxIi8+Cjx2ZWN0b3JuYXRvcjpzZXR0aW5nIGtleT0iR3JpZFNwYWNpbmciIHZhbHVlPSIzNiIvPgo8L21ldGFkYXRhPgo8ZGVmcy8+CjxnIGlkPSJFYmVuZSAxIiB2ZWN0b3JuYXRvcjpsYXllck5hbWU9IkViZW5lIDEiPgo8cGF0aCBkPSJNNDIuOTczNisyNTkuNzg0QzQyLjk3MzYrMjQxLjU0NSs0NS4yMzc1KzIyMy44MzUrNDkuNDk5NSsyMDYuOTE5QzUwLjY2NzErMjAyLjI4Nis1OS4yOTg3KzE4MS4yNTUrNjUuMTkxKzE4MC44NjJDNzMuNzAyOSsxODAuMjk1KzU5LjE3NjcrMTc3LjE4Mys2Mi43MTE5KzE2OS41MjFDNzAuMTcxOCsxNTMuMzUzKzg2LjIyOTgrMTY3LjUyNSsxMDguMzA2KzEzOS4wOThDMTI4LjkxOSsxMTIuNTU2KzExMS42MTMrMTAxLjIxOCsxMjMuODU2KzkxLjQwMzZDMTI2LjkwOSs4OC45NTU4KzEyNi40MzMrOTIuMTAxNSsxMzMuMjE3Kzg0LjMwNzVDMTU1LjM5KzU4LjgzMjUrMjExLjg3Mis0NC4wOTY0KzI1OC42NjIrNDQuMDk2NEMyNjMuMzUzKzQ0LjA5NjQrMjY4LjAxKzQ0LjI0NjIrMjcyLjYyNys0NC41NDEyQzI3OC4zMDgrNDQuOTA0MysyODYuMjQ1KzUyLjIwNDYrMjkxLjc5OSs1Mi45OTkyQzI5Ny42NTYrNTMuODM3MiszMDEuMTIyKzQ4LjE5MzUrMzA2LjgxOCs0OS40OTIzQzMyMC4yMjgrNTIuNTUwNiszMTcuNDU0KzY1LjExMDYrMzM5LjY0OCs3OS43MTIxQzM2MS44NDIrOTQuMzEzNyszNjcuOTA5KzczLjM1NzUrMzc4LjIyOCs4MC4yNDMyQzM4MC4xNTYrODEuNTI5NCszNzUuNzIxKzg0LjYyODErMzgyLjY3OSs4OS4wNTYxQzM5MC4xMjcrOTMuNzk1OSszOTUuMjc2KzkyLjg2OTgrMzk1LjI3Nis5Mi44Njk4QzQwOS41NTQrMTA0LjU2OSs0MjIuMzAzKzExOC4wNjQrNDMzLjE3OSsxMzMuMDFDNDM3LjExNysxMzguNDIzKzQyNS43MDcrMTQ1Ljk5NCs0MzQuNjU4KzE1OS45M0M0NDMuNjA4KzE3My44NjYrNDQyLjY5OCsxNTQuNjYzKzQ2MC4wMjErMTgyLjMxOUM0NzMuNjk2KzIwNC4xNTIrNDc0LjM1KzIzMi40OCs0NzQuMzUrMjU5Ljc4NEM0NzQuMzUrMjY3Ljk3KzQ2Ny44MjQrMjY5Ljk5OSs0NjguMzE3KzI3Ny4zMzZDNDY4LjgxKzI4NC42NzQrNDc0LjQ3MyszMTEuMzYxKzQ2My4zMjcrMzA1LjcyNkM0NTYuNDExKzMwMi4yMys0NTYuMjQ2KzMwNi45MDUrNDU0LjAyMyszMjAuOTY3QzQ1MS44KzMzNS4wMys0NjAuMzE4KzMzNi42MzQrNDU4LjQ1NCszNDEuMjAzQzQ1Ny4zNzUrMzQzLjg0OCs0NTcuNDQ1KzM1MS4yMTkrNDUxLjI2NCszNDguMDA1QzQ0NS4wODQrMzQ0Ljc5Mis0NTEuNzA3KzM1Ni4xNzMrNDQ5Ljg4OCszNTkuNjQ4QzQzMi41MjgrMzkyLjgyMis0MDYuNzg5KzQyMC45MiszNzUuNDc5KzQ0MS4xM0MzNzAuNTgyKzQ0NC4yOTErMzYwLjA0KzQ1My4xNTMrMzU3Ljc2NCs0NDYuMjc1QzM1NS40ODgrNDM5LjM5NiszNTMuMTkyKzQ1My43NTErMzQ5LjUwOCs0NTUuNDY0QzMzNi40MDIrNDYxLjU1OSszNTEuODErNDM2LjcxMysyOTYuNjM2KzQ0OS40ODVDMjU4LjA4MSs0NTguNDErMjc1LjcxMSs0NzUuNDcyKzI1OC42NjIrNDc1LjQ3MkMyNTUuMDczKzQ3NS40NzIrMjU0LjEzMSs0NzAuMTY3KzI1MC41ODQrNDY5Ljk5M0MyNDYuNDIxKzQ2OS43OSsyMzkuNjYyKzQ3NC42ODYrMjM1LjU2Mys0NzQuMjVDMjEyLjM4KzQ3MS43ODIrMTkwLjI5NCs0NjUuNjQxKzE2OS44OTkrNDU2LjQyQzE1Ni4wNjIrNDUwLjE2NCsxNTEuODM1KzQyOS4zMDcrMTMwLjkwNys0MzMuNTg0QzEyMi44MjQrNDM1LjIzNisxMTYuNDYrNDMwLjAyKzExMC43ODIrNDIyLjgwM0MxMDcuNTQzKzQxOC42ODUrMTAzLjQ2Mis0MTIuMjc5KzEwNC4wNTcrNDAyLjIzQzEwNC42NTIrMzkyLjE4Mis5Ni45MTYzKzQwMi41MjMrOTQuNTQxMiszOTkuNzRDOTAuMTI1OCszOTQuNTY3KzEwNS45MjkrMzgyLjgwOSs4OS45MDEyKzM2OC44OThDNjYuNzg1MSszNDguODM1KzY5LjY3NDYrMzY0LjQ0Nys2NC42NTE2KzM1NC4xMzhDNjIuMzA0OCszNDkuMzIxKzY4LjQyNTIrMzQ2Ljk2Nys2Ni40MzQ4KzM0MS45NThDNjQuODc4NSszMzguMDQxKzU1LjE0MDUrMzMxLjUwNis1My44MTA5KzMyNy40OEM0Ni43NzkxKzMwNi4xOSs0Mi45NzM2KzI4My40MzErNDIuOTczNisyNTkuNzg0WiIgb3BhY2l0eT0iMSIgZmlsbD0iIzBkMGQwZCIvPgo8L2c+CjxnIGlkPSJFYmVuZSAyIiB2ZWN0b3JuYXRvcjpsYXllck5hbWU9IkViZW5lIDIiPgo8cGF0aCBkPSJNNjUuNjA4MisyNDIuMzU4QzY1LjYwODIrMjE1Ljg2OSs3OS40MzcyKzIwOS4zODQrODguMTkxNisyMDIuNDg3QzExMC4xNjcrMTg1LjE3Mys4MC4wNjQrMjY4LjE3MysxMDEuMysyNjcuNDhDMTIyLjUzNSsyNjYuNzg3KzE1MS45MjgrMzI5LjQwMisxMDQuMzc5KzMzMy4xNDNDNTYuODI5MiszMzYuODg0KzY1LjYwODIrMjY4Ljg0OCs2NS42MDgyKzI0Mi4zNThaIiBvcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIi8+CjxwYXRoIGQ9Ik0xNzAuNjk0KzQyMi40MDNDMTgwLjg2NCszOTMuOTc0KzIwMy4yMzUrNDI2LjgyOCsyMjYuODExKzQxNi42NThDMjU3Ljk0NSs0MDMuMjI3KzI0NC41NDYrNDE2LjU1NysyNjUuMzA1KzQyNC43NDFDMzAwLjM0Mis0MzguNTU1KzIzNy4zMzUrNDY0Ljc5MysyMTIuMzY4KzQ0OC43NTVDMTg3LjQwMis0MzIuNzE2KzE2Mi41OTErNDQ1LjA1NSsxNzAuNjk0KzQyMi40MDNaIiBvcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIi8+CjxwYXRoIGQ9Ik00MzkuNDE0KzI4OS4yMzlDNDUwLjI0MyszMDMuNTA4KzQxOS40MzMrMzQzLjUzNSszODkuOTQzKzM0My40OTdDMzYwLjQ1MyszNDMuNDU5KzM5MC4yNDUrMzExLjI2NiszOTkuOTMyKzMxMC4yMjlDNDI2LjM0MyszMDcuNCs0MjQuMTg4KzI2OS4xNzMrNDM5LjQxNCsyODkuMjM5WiIgb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIvPgo8cGF0aCBkPSJNMzY2LjI0MSsxODguNDk5QzM3OS4zNjQrMTY0LjU5NyszNDYuNTU3KzE1Ny41NjcrMzY2LjI0MSsxMzYuOTQ1QzM3Ny45NDgrMTI0LjY4Mis0MTEuNzAyKzEzNC4zNDgrNDExLjcwMisxNjEuNzg1QzQxMS43MDIrMTg5LjIyMis0NDQuMDQxKzIwMy40OTcrNDI0LjgyNSsyMzUuMzY2QzQxNi4wNzErMjQ5Ljg4NiszNTMuMDM3KzIxMi41NSszNjYuMjQxKzE4OC40OTlaIiBvcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIi8+CjxwYXRoIGQ9Ik0zMjMuMzI1KzM4MS44OTJDMzMwLjk4NSszNzQuMzYyKzM1MS40MjkrMzk3LjUxNyszNjkuMTAxKzM3Ni4yODVDMzg5LjY1MiszNTEuNTk0KzQ0OC4yMjYrMzQ3LjAyMSs0MDcuNzUzKzM4Ny44NzFDMzY3LjI4KzQyOC43MjIrMzMxLjI3NSs0MzIuODg1KzMxNy45NTgrNDIyLjAxNUMyOTMuNDEzKzQwMS45ODIrMzE1LjY2NSszODkuNDIzKzMyMy4zMjUrMzgxLjg5MloiIG9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiLz4KPHBhdGggZD0iTTE1OC4xMzcrMTA4LjgyNUMxNzMuODg1KzkyLjI2NTcrMTg2LjIyNys3NC41MTI4KzIxNi4yNTIrNzQuNTEyOEMyMzUuOTI4Kzc0LjUxMjgrMzIzLjI3Mys3Mi4xOTczKzMwMC42OSs5Ni40NzNDMjc2LjQyNisxMjIuNTU2KzI4MC41NDkrNzkuNjY5NSsyMjEuNjkyKzEwNS45NDhDMTU2Ljc5OCsxMzQuOTIzKzE4Ni43NzQrMjAyLjUxNSsxNDMuMjMxKzE3Ny4xNTZDMTMxLjcwNCsxNzAuNDQzKzEzNy4wNDcrMTMxLjAwMysxNTguMTM3KzEwOC44MjVaIiBvcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIi8+CjxwYXRoIGQ9Ik0zMDIuODMxKzM2My4wOTVDMjg5Ljk0MiszNTguMjg0KzMxMC44NSszMjkuMTY3KzMyMC4yOTgrMzI5LjE2N0MzMjkuNzQ1KzMyOS4xNjcrMzQwLjg5KzMxOC4wODYrMzQ0LjIrMzMyLjkxN0MzNDcuNTErMzQ3Ljc0NyszMzYuMjMyKzMzNy42MDMrMzI2Ljg1OSszNDYuNTA4QzMxNy40ODUrMzU1LjQxMyszMjQuMTgyKzM3MS4wNjMrMzAyLjgzMSszNjMuMDk1WiIgb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIvPgo8cGF0aCBkPSJNMTQwLjgyOCszMjYuMTIzQzEyMS4yNDcrMzQ5LjA5KzEyNC43MDUrMzY3LjU0NysxNTUuMTg1KzM3NS4zMDhDMTg1LjY2NiszODMuMDcrMjMzLjc1OSszODMuMDQ2KzIzNy43ODUrMzU2LjI0N0MyNDEuODExKzMyOS40NDgrMjE0Ljg2OSszMjcuMjQ2KzE5OS45NysyOTMuMTRDMTg1LjA3MisyNTkuMDM0KzE0OC45NDMrMjE5Ljg1NSsxNDcuNDY1KzI1My4yMjRDMTQ1Ljk4OCsyODYuNTk0KzE3Ni4yMzkrMjg0LjU5MisxNDAuODI4KzMyNi4xMjNaIiBvcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIi8+CjxwYXRoIGQ9Ik0zMTIuMDE1KzEzNS41NjRDMzAzLjgxOCsxMzAuNDc2KzI2Ny4wODUrMTYxLjQxNSsyOTIuMjM4KzE4MC45NThDMzE3LjM5MSsyMDAuNTAxKzMzOC42MzcrMjExLjE4NCszMzkuNDY0KzE5MC4zMDRDMzQwLjI5MSsxNjkuNDI1KzMzOC4zMjErMTc2LjE2KzMxOS4wMSsxNjQuNDE4QzI5OS42OTgrMTUyLjY3NyszMzAuNTc4KzE0Ny4wODcrMzEyLjAxNSsxMzUuNTY0WiIgb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIvPgo8cGF0aCBkPSJNMzQ0LjIxNysyNDIuNTEzQzM0NC4yMTcrMjM3LjgwOSszNDcuNzI5KzIzMy45OTYrMzUyLjA2KzIzMy45OTZDMzU2LjM5MSsyMzMuOTk2KzM1OS45MDMrMjM3LjgwOSszNTkuOTAzKzI0Mi41MTNDMzU5LjkwMysyNDcuMjE3KzM1Ni4zOTErMjUxLjAzMSszNTIuMDYrMjUxLjAzMUMzNDcuNzI5KzI1MS4wMzErMzQ0LjIxNysyNDcuMjE3KzM0NC4yMTcrMjQyLjUxM1oiIG9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiLz4KPHBhdGggZD0iTTIyOC4xNDIrMjA5LjA4MUMyMTguODQ3KzIyOC4xNjQrMjA2Ljk4OSsyMjguMTI2KzE5Ny4wNDcrMjMzLjkzMkMxODcuMTA1KzIzOS43MzgrMTgwLjgyNisyMDguNTk3KzIwMC44NjErMTkxLjA5N0MyMjAuODk3KzE3My41OTYrMTg5LjQwOSsxNjAuNDc5KzIxMi45MTkrMTQ2LjQ4M0MyMzYuNDI5KzEzMi40ODcrMjM3LjQzNisxODkuOTk5KzIyOC4xNDIrMjA5LjA4MVoiIG9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiLz4KPHBhdGggZD0iTTExNC43OTErMjAyLjUxMUMxMTQuNzkxKzE5Ny4yMzMrMTE4LjcyNSsxOTIuOTU0KzEyMy41NzcrMTkyLjk1NEMxMjguNDI5KzE5Mi45NTQrMTMyLjM2MisxOTcuMjMzKzEzMi4zNjIrMjAyLjUxMUMxMzIuMzYyKzIwNy43ODkrMTI4LjQyOSsyMTIuMDY4KzEyMy41NzcrMjEyLjA2OEMxMTguNzI1KzIxMi4wNjgrMTE0Ljc5MSsyMDcuNzg5KzExNC43OTErMjAyLjUxMVoiIG9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiLz4KPC9nPgo8ZyBpZD0iRWJlbmUgMyIgdmVjdG9ybmF0b3I6bGF5ZXJOYW1lPSJFYmVuZSAzIj4KPHBhdGggc3Ryb2tlPSIjMGQwZDBkIiBzdHJva2Utd2lkdGg9IjUiIGQ9Ik00MTguMTQ0KzIyOS43NzJDNDE4LjE0NCsyMjkuNzcyKzQyOS4xNTgrMjIxLjIyOCs0MTkuNDE2KzIwNS4yMTVDNDA5LjY3NCsxODkuMjAzKzQwNy44NDgrMTc3LjE3OSs0MDMuOTk2KzE2NC41ODhDNDAwLjE0NCsxNTEuOTk3KzQwNi4xOTErMTQwLjM4KzM4My40MSsxMzcuMjExQzM2OS44NjErMTM1LjMyNyszNjIuNjc0KzE0OS4yNzkrMzY3LjYyMisxNTYuODE4QzM2Ny42MjIrMTU2LjgxOCszNzkuODM3KzEzNS41NTUrMzkzLjQ0MysxNDYuMDA3QzQwMS4wOCsxNTEuODc0KzM5OS4wMSsxNjQuNTM1KzQyMC4zMTUrMjEzLjQ3OEM0MjUuMjY4KzIyNC44NTYrNDE4LjE0NCsyMjkuNzcyKzQxOC4xNDQrMjI5Ljc3MloiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgb3BhY2l0eT0iMSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBzdHJva2U9IiMwZDBkMGQiIHN0cm9rZS13aWR0aD0iNSIgZD0iTTMwMy45NCsxNTYuMDc2QzI5OC40NTQrMTY4LjM5OCszMzIuOTY1KzE3Ny4zOTIrMzMyLjk2NSsxNzcuMzkyQzMzMi45NjUrMTc3LjM5MiszMjMuOTQxKzE3My4xOTQrMzE1LjU4MSsxNjkuMzMxQzMwNy4yMjErMTY1LjQ2OSszMDcuMjI2KzE2MC41NiszMDcuMzIrMTU4LjY0NkMzMDcuOTQ4KzE0NS44MjUrMzE0LjU1NisxNDUuODErMzEyLjY2NisxNDIuMzg4QzMxMC43NzYrMTM4Ljk2NiszMDIuNzA5KzE0MS44KzI5Ni42NzkrMTQ4LjAzNEMyOTQuOTI1KzE0OS44NDcrMzA4LjU5MysxNDUuNjI1KzMwMy45NCsxNTYuMDc2WiIgZmlsbD0iIzBkMGQwZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBvcGFjaXR5PSIxIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIHN0cm9rZT0iIzBkMGQwZCIgc3Ryb2tlLXdpZHRoPSI1IiBkPSJNMzgzLjQ4MyszMzIuNTIzQzM4MS4yNSszNDMuNTA5KzM5OS4wMTQrMzM3LjAxKzQwNS4xMjErMzM1LjE2MkM0MTkuNTA2KzMzMC44MDkrNDQxLjAyNCszMDQuMjUxKzQzNS42OTQrMjk1LjY3NEM0MzUuNjk0KzI5NS42NzQrNDMzLjAyMiszMjUuNzQ2KzQwMC43NzQrMzMyLjY2OUM0MDAuNzc0KzMzMi42NjkrMzg0LjU0NCszMjcuMzAyKzM4My40ODMrMzMyLjUyM1oiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgb3BhY2l0eT0iMSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBzdHJva2U9IiMwZDBkMGQiIHN0cm9rZS13aWR0aD0iNSIgZD0iTTQxNC4yOTErMzcxLjUyMUM0MTIuMzk3KzM3NC42NzYrNDEyLjQ4MiszNzQuODQ1KzQwOS4yMzYrMzc4LjM1M0M0MDcuNTE0KzM4MC4yMTMrNDA0LjQyNyszODMuNTc2KzQwMi4yMjkrMzg1LjY0QzM5MS44NDQrMzk1LjM5MSszNzguNTIyKzQwNi43OTMrMzYyLjk5KzQxNC4xMjRDMzM3Ljk3MSs0MjUuOTMzKzMyOC40MTcrNDI1Ljk5MyszMTYuMDE5KzQxMS4zODlDMzA5LjA1NSs0MDMuMTg3KzMxNi41OTErMzk2LjQ5NSszMTYuNTkxKzM5Ni40OTVDMzE2LjU5MSszOTYuNDk1KzMyMS44ODkrNDE2LjAzOCszNDIuNjg2KzQxNC40OEMzNjAuMjgxKzQxMy4xNjErMzgxLjQ1Nys0MDAuNjI5KzM5NC41MjMrMzkwLjQ5M0M0MDYuMTcxKzM4MS40NTgrNDE2LjU0NCszNjcuNzY1KzQxNC4yOTErMzcxLjUyMVoiIGZpbGw9IiMwZDBkMGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgb3BhY2l0eT0iMSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBzdHJva2U9IiMwZDBkMGQiIHN0cm9rZS13aWR0aD0iNSIgZD0iTTI4Ny41NjkrOTkuODU3NkMyODcuNTY5Kzk5Ljg1NzYrMzAwLjI0MSs5My43OTM5KzI5Ni41NTYrODguNDI3OEMyOTIuODcrODMuMDYxNysyMjUuODc3Kzc0LjI5ODMrMTk5LjQ4NCs4Mi45MDg0QzE4NC4xNys4Ny45MDQyKzE3MS4xMDcrOTkuMjQxNisxNTcuNTQ0KzExNi41MjFDMTQzLjk4MSsxMzMuOCsxMzQuMDAyKzE2OC42NzIrMTUwLjM0NysxNzMuNzQ5QzE1NS4wNTQrMTc1LjIxMisxNDcuNTk2KzE1OC41NTMrMTUxLjQ4NCsxNDAuMzA1QzE1NS4zNzMrMTIyLjA1NysxNjEuMzgyKzExMC40NTUrMTgzLjI1Mys5My4wNDgyQzIwNS4zKzc1LjUwMDkrMjY4LjA2Nys3OS40MDE1KzI4OS42MzcrODcuNTM3M0MyOTguMDM0KzkwLjcwNDkrMjg3LjU2OSs5OS44NTc2KzI4Ny41NjkrOTkuODU3NloiIGZpbGw9IiMwZDBkMGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgb3BhY2l0eT0iMSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjI4Ljk2OSsxOTcuNTA2QzIzMS42OSsxOTYuODI0KzIzMy4zNjErMTUzLjAwNisyMjIuMjY5KzE0Ny45NTVDMjE5LjQxNisxNDYuNjU2KzIwOS45MTQrMTQ3LjQyKzIwNy4wNDYrMTU2LjMyN0MyMDQuMTc5KzE2NS4yMzUrMjExLjU0NCsxNzAuNDg5KzIwOS4wNTYrMTgxLjI1NEMyMDYuNTY4KzE5Mi4wMTkrMTk2LjY2OCsxOTcuNTc4KzE5NS4wNzIrMjAxLjk1MUMxOTMuMDAxKzIwNy42MjUrMjAyLjgzMysxOTcuNjY5KzIxMS4zODErMTg3LjIzM0MyMjAuMTMyKzE3Ni41NTErMjA3LjU2OSsxNjQuMzE5KzIxNy4xODgrMTU3Ljg4OEMyMjMuNjE4KzE1My41ODgrMjI2LjE1OCsxNjkuMzk5KzIyNy41MjgrMTgyLjU2NUMyMjguMjA3KzE4OS4wOTUrMjI1Ljk2NysxOTguMjU4KzIyOC45NjkrMTk3LjUwNloiIG9wYWNpdHk9IjEiIGZpbGw9IiMwZDBkMGQiLz4KPHBhdGggc3Ryb2tlPSIjMGQwZDBkIiBzdHJva2Utd2lkdGg9IjUiIGQ9Ik0xODIuMTQ4KzI3Mi4yNjRDMTczLjkzOSsyNTkuNDkzKzE2MS4wNDQrMjQ1LjU0OSsxNTYuNDMyKzI0Ni42MjNDMTUxLjUwOCsyNDcuNzcrMTUwLjMwNSsyNTkuMTQ3KzE1NS41MTkrMjcxLjAzNEMxNjYuOTE0KzI5Ny4wMTQrMTYzLjMzMisyODguMzE0KzE2My4zMzIrMjg4LjMxNEMxNjMuMzMyKzI4OC4zMTQrMTQ1Ljc1OCsyNDcuMzYrMTY1LjM4NysyNTcuNzk0QzE4MC4wNzErMjY1LjU5OSsxOTAuOTM5KzI4NS45MzgrMTgyLjE0OCsyNzIuMjY0WiIgZmlsbD0iIzBkMGQwZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBvcGFjaXR5PSIxIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIHN0cm9rZT0iIzBkMGQwZCIgc3Ryb2tlLXdpZHRoPSI1IiBkPSJNMTI0LjQ0OSszMDUuNTI5QzEyNS41NjQrMjk4LjcyMysxMTIuNjA5KzI3MS44MDQrMTAxLjcwOCsyNzMuMzExQzk2LjQ5NjcrMjc0LjAzMis5My4xNTI0KzI3MS40NTQrOTAuNTc4NSsyNjQuOTQ4Qzg3Ljc2ODcrMjU3Ljg0Nys4OS42OCsyMzUuMzc5Kzg5LjY4KzIzNS4zNzlDODkuNjgrMjM1LjM3OSs3Ni45NjIrMjc4LjAzMis5Ny4yNTQxKzI3Ni41NDRDMTA3LjQzMysyNzUuNzk3KzExMC41OTgrMjgwLjA5NCsxMTUuMTk5KzI4NS4xMzFDMTI3LjU2MSsyOTguNjYzKzEyMi44NzMrMzE1LjE1MysxMjQuNDQ5KzMwNS41MjlaIiBmaWxsPSIjMGQwZDBkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIG9wYWNpdHk9IjEiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggc3Ryb2tlPSIjMGQwZDBkIiBzdHJva2Utd2lkdGg9IjUiIGQ9Ik0zNTUuNzcxKzI0Mi4zMTNDMzU1LjYxKzI0Ni43OTkrMzUxLjQ0NCsyMzguNjk0KzM1MS40NDQrMjM4LjY5NEMzNTEuNDQ0KzIzOC42OTQrMzU1LjkzMisyMzcuODI3KzM1NS43NzErMjQyLjMxM1oiIGZpbGw9IiMwZDBkMGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgb3BhY2l0eT0iMSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBzdHJva2U9IiMwZDBkMGQiIHN0cm9rZS13aWR0aD0iNSIgZD0iTTMxNC4xMjIrMzYwLjE0NEMzMTkuMTQ2KzM1OC40ODMrMzE3LjI3MyszNTIuMjc5KzMyMC44MTMrMzQ3Ljg3QzMyMi4xMjYrMzQ2LjIzNCszMTQuMzA0KzM1Ny45MTIrMzExLjczMSszNTguNTc5QzMwMS44MDMrMzYxLjE1MyszMDIuMzY5KzM1MC40NzYrMzAyLjk0NCszNTYuMDA1QzMwMy41MTkrMzYxLjUzMyszMTEuMTU0KzM2MS4xMjYrMzE0LjEyMiszNjAuMTQ0WiIgZmlsbD0iIzBkMGQwZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBvcGFjaXR5PSIxIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIHN0cm9rZT0iIzBkMGQwZCIgc3Ryb2tlLXdpZHRoPSI1IiBkPSJNMjE4LjgyKzQ0Ny4xNjhDMjE4LjgyKzQ0Ny4xNjgrMjI4LjA0OSs0NTAuMzk0KzIzOS4zMis0NDkuMzhDMjU0LjYwMSs0NDguMDA1KzI2OS42NTcrNDM5Ljg0NSsyNjkuMTM5KzQzNS4zNUMyNjguNjIxKzQzMC44NTQrMjU4LjM3NCs0MjcuMjY3KzI1My4zMzkrNDI0LjY5MkMyNTAuNTM1KzQyMy4yNTgrMjQ5LjE4OSs0MTkuMDgxKzI0NS42MDcrNDE2LjM2MkMyNDIuMDI1KzQxMy42NDMrMjQ0Ljg1Nis0MjIuOTY3KzI1MS45NzMrNDI3LjkzOUMyNjMuNDE3KzQzNS45MzUrMjU0Ljg3OSs0NDEuNzk3KzI1MC45MjQrNDQzLjg1NkMyNDUuMjc2KzQ0Ni43OTUrMjE4LjgyKzQ0Ny4xNjgrMjE4LjgyKzQ0Ny4xNjhaIiBmaWxsPSIjMGQwZDBkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIG9wYWNpdHk9IjEiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggc3Ryb2tlPSIjMGQwZDBkIiBzdHJva2Utd2lkdGg9IjUiIGQ9Ik0yMzEuMTc5KzM0NC42ODVDMjI4LjMwNSszMzEuNTQxKzIwOC4xODYrMzI0LjI2NCsxOTkuODQ2KzMwNC4yNTFDMTk1Ljk4NisyOTQuOTg3KzE5NC4zNTgrMzEwLjUxKzIyMC4wOTkrMzM4Ljk3NUMyMzQuMzM1KzM1NC43MTcrMjE4LjY4NCszNjcuMjgyKzIwMS40MiszNzIuMzcyQzE4Ny40NjYrMzc2LjQ4NisxNzIuMjkzKzM3NC41NTYrMTcyLjI5MyszNzQuNTU2QzE3Mi4yOTMrMzc0LjU1NisyMDEuMDIyKzM3NS41MjMrMjE2LjIzMSszNzAuMjY2QzIzMS40NDErMzY1LjAwOSsyMzQuMDUyKzM1Ny44MjkrMjMxLjE3OSszNDQuNjg1WiIgZmlsbD0iIzBkMGQwZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBvcGFjaXR5PSIxIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIHN0cm9rZT0iIzBkMGQwZCIgc3Ryb2tlLXdpZHRoPSI1IiBkPSJNMTQ3LjgwOSszNjguMTYxQzE0Ny44MDkrMzY4LjE2MSsxNDAuMzMzKzM2NC40NisxMzcuMDc1KzM2MC44NTZDMTMxLjEyNSszNTQuMjcyKzEzNC4yMzUrMzQ2LjgxNSsxMzUuMDQxKzM0My42MjRDMTM2Ljg1NiszMzYuNDMyKzEzNS44MDQrMzQ1Ljc3KzEzOC44MDcrMzU0Ljc4MkMxNDEuMTAzKzM2MS42NysxNDcuODA5KzM2OC4xNjErMTQ3LjgwOSszNjguMTYxWiIgZmlsbD0iIzBkMGQwZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBvcGFjaXR5PSIxIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik04OS40MTc1KzIyOS4wNzlDOTMuNjE3NSsyMjYuOTc5Kzk1LjcxNzUrMjA1LjY1MSs5MS41MTc1KzIwNS43MTZDODcuMzE3NSsyMDUuNzgyKzczLjUzNjMrMjE5Ljc2KzczLjE0MjUrMjI0LjM1NEM3Mi45MTY3KzIyNi45ODgrNzkuNDQyNSsyMjMuNTY2Kzg1Ljc4ODIrMjE2LjgzQzg4LjAyMzUrMjE0LjQ1Nys4Mi4xMzUzKzIzMi43Mis4OS40MTc1KzIyOS4wNzlaIiBvcGFjaXR5PSIxIiBmaWxsPSIjMGQwZDBkIi8+CjxwYXRoIHN0cm9rZT0iIzBkMGQwZCIgc3Ryb2tlLXdpZHRoPSI1IiBkPSJNMTI3LjIxOSsyMDIuNDA3QzEyNS45OTQrMjA2LjEwNysxMTkuMjcrMTkzLjY3NCsxMTguNzQ0KzIwMS4zODdDMTE4LjQ3KzIwNS40MDUrMTE5LjIyNysxOTguNDYrMTIxLjg5OSsxOTYuODI5QzEyNC4zNTUrMTk1LjMzKzEyOC40NDQrMTk4LjcwNisxMjcuMjE5KzIwMi40MDdaIiBmaWxsPSIjMGQwZDBkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIG9wYWNpdHk9IjEiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8L3N2Zz4K" />
                   </div>
                   <div className="contact-wrapper__email ">
                      <a className="wave-link" href="mailto:hello@saltmuffin.com">
                          hello@saltmuffin.com
                      </a>
               </div>
               </div>
           </div>
       </div>
    );
};

export default contact;
