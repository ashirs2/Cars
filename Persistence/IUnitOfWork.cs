using System;
using System.Threading.Tasks;

namespace Cars.Persistence
{
    public interface IUnitOfWork
    {
        Task CompleteAsync();

    }
}
