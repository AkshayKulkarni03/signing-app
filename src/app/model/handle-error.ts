import { throwError, Observable } from 'rxjs';

export const handleError = <T>(operation = 'operation', result?: T) => {
    return (error: any): Observable<T> => {
        console.error(error);
        return throwError(result);
    };
}