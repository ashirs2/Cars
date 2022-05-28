using System;
using System.Threading.Tasks;

namespace Cars.Core
{
    public interface IUnitOfWork
    {
        Task CompleteAsync();

    }
}
