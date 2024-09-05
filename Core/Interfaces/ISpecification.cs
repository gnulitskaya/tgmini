using System;
using System.Linq.Expressions;

namespace Core.Interfaces;

public interface ISpecification<T>
{
    Expression<Func<T, bool>>? Criteria {get;} // ability to add Where expression to filter items
    Expression<Func<T, object>>? OrderBy {get;} 
    Expression<Func<T, object>>? OrderByDescending {get;} 
}
