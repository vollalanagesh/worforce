export class employeeListModel
{
    
    page!: number
    per_page!: number
    total!: number
    total_pages!: number
    data:EmployeeData[]=[]


}

export class EmployeeData
{
    id!: number
    email!: string
    first_name!: string
    last_name!: string
    avatar!: string
    

}